"use client";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import ReactSelect from "react-select";
import { getSalutationsData } from "@/api/salutation";
import { getCountries } from "@/api/country";
import { getGender } from "@/api/gender";
import { useFormik } from "formik";
import { SignUpApi } from "@/api/auth";
import { ShowErrorSwalToast, ShowSuccessSwalToast } from "../common/SwalToast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FlatPickerSelectOnlyDateComponent } from "@/utils/flatpicker";

// Define the validation schema using Yup
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required").max(30),
  lastName: yup.string().required("Last name is required").max(30),
  mobileNo: yup.string().required("Mobile is required").max(20),
  emgContactName: yup.string().required("Emergency contact name is required").max(50),
  emgContactRel: yup.string().required("Emergency contact relationship is required").max(30),
  emgContactNo: yup.string().required("Emergency contact number is required").max(20),
  genderId: yup.string().required("Gender is required"),
  dateOfBirth: yup.date().required("Date of Birth is required").typeError("Invalid date format").max(new Date(), "Date of Birth must be in the past"),
  country: yup.string().required("Country is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/\d/, "Password must contain at least one number"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  isTermsAgreed: yup.number().oneOf([1], "You must accept the terms and conditions"),
});

const SignUpComponent = () => {
  const [date, setDate] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [salutationOptions, setSalutationOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    fetchSalutation();
    fetchCountry();
    fetchGender();
  }, []);

  //Salutation Options
  const fetchSalutation = async () => {
    const { success, salutationOptions } = await getSalutationsData();
    if (success) {
      setSalutationOptions(salutationOptions);
    }
  };

  //Country Options
  const fetchCountry = async () => {
    const { success, countryOptions } = await getCountries();
    if (success) {
      setCountryOptions(countryOptions);
    }
  };

  //Gender Options
  const fetchGender = async () => {
    const { success, genderOptions } = await getGender();
    if (success) {
      setGenderOptions(genderOptions);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNo: "",
      emgContactName: "",
      emgContactRel: "",
      emgContactNo: "",
      genderId: "",
      dateOfBirth: null,
      country: "",
      email: "",
      password: "",
      confirmPassword: "",
      isTermsAgreed: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (data, { setErrors, setSubmitting }) => {
      try {
        setSubmitting(false);

        const { success, hasErrors, errors, message } = await SignUpApi(data);

        if (success) {
          const signInRes = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
          });

          if (signInRes.ok) {
            router.push("/my-account");
            ShowSuccessSwalToast(message);
          } else {
            ShowErrorSwalToast("Something went wrong!");
          }
        } else if (hasErrors && errors) {
          const formikErrors = {};
          errors.forEach((error) => {
            formikErrors[error.field] = error.message;
          });
          setErrors(formikErrors);
        } else {
          ShowErrorSwalToast(message);
        }
      } catch (error) {
        console.error("Error during form submission:", error);
        setSubmitting(false);
        ShowErrorSwalToast("An unexpected error occurred. Please try again later.");
      }
    },

    validateOnChange: true,
    validateOnBlur: true,
  });

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <section className="auth-section sectionPadding">
      <Container>
        <Row>
          <Col md={8} lg={8} className="mx-auto">
            <div className="form-inner">
              <div className="form-title-part">
                <h2 className="form-title mb-1">
                  <span className="icon-bg">
                    <FontAwesomeIcon className="icon" icon={faRightToBracket} />
                  </span>
                  NEW USER?
                  <span className="form-sub-title"> REGISTER HERE</span>
                </h2>
              </div>

              <div className="form-part">
                <Form onSubmit={formik.handleSubmit} noValidate>
                  <Row className="g-lg-3 g-2 mb-sm-4 mb-2 row">
                    <h4 className="forms-sub-heading">Contact Information</h4>

                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Salutation <span className="required">*</span>
                        </Form.Label>
                        <ReactSelect
                          name="salutations"
                          placeholder={"Select Salutation"}
                          value={salutationOptions.find((option) => option.value === formik.values.salutationId)}
                          onChange={(selectedOption) => formik.setFieldValue("salutationId", selectedOption ? selectedOption.value : "")}
                          options={salutationOptions}
                          noOptionsMessage={() => "No Salutations found"}
                          isClearable={true}
                          isSearchable={false}
                        />
                        {formik.errors.salutationId && formik.touched.salutationId ? <div className="text-danger">{formik.errors.salutationId}</div> : null}
                      </Form.Group>
                    </Col>

                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          First Name <span className="required">*</span>
                        </Form.Label>
                        <Form.Control name="firstName" isInvalid={formik.touched.firstName && !!formik.errors.firstName} {...formik.getFieldProps("firstName")} maxLength={30} />
                        <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Last Name <span className="required">*</span>
                        </Form.Label>
                        <Form.Control name="lastName" isInvalid={formik.touched.lastName && !!formik.errors.lastName} maxLength={30} {...formik.getFieldProps("lastName")} />
                        <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Mobile <span className="required">*</span>
                        </Form.Label>
                        <Form.Control name="mobileNo" isInvalid={formik.touched.mobileNo && !!formik.errors.mobileNo} {...formik.getFieldProps("mobileNo")} maxLength={20} />
                        <Form.Control.Feedback type="invalid">{formik.errors.mobileNo}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Emergency Contact Name <span className="required">*</span>
                        </Form.Label>
                        <Form.Control name="emgContactName" isInvalid={formik.touched.emgContactName && !!formik.errors.emgContactName} {...formik.getFieldProps("emgContactName")} maxLength={50} />
                        <Form.Control.Feedback type="invalid">{formik.errors.emgContactName}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Emergency Contact Relationship <span className="required">*</span>
                        </Form.Label>
                        <Form.Control name="emgContactRel" isInvalid={formik.touched.emgContactRel && !!formik.errors.emgContactRel} {...formik.getFieldProps("emgContactRel")} maxLength={30} />
                        <Form.Control.Feedback type="invalid">{formik.errors.emgContactRel}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Emergency Contact Number <span className="required">*</span>
                        </Form.Label>
                        <Form.Control name="emgContactNo" isInvalid={formik.touched.emgContactNo && !!formik.errors.emgContactNo} {...formik.getFieldProps("emgContactNo")} maxLength={20} />
                        <Form.Control.Feedback type="invalid">{formik.errors.emgContactNo}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-lg-3 g-2 mb-sm-4 mb-2 row">
                    <h4 className="forms-sub-heading">Personal Information</h4>

                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Gender <span className="required">*</span>
                        </Form.Label>
                        <ReactSelect
                          name="genderId"
                          placeholder={"Select Gender"}
                          value={genderOptions.find((option) => option.value === formik.values.genderId)}
                          onChange={(selectedOption) => formik.setFieldValue("genderId", selectedOption ? selectedOption.value : "")}
                          options={genderOptions}
                          noOptionsMessage={() => "No record found"}
                          isClearable={true}
                          isSearchable={false}
                        />
                        {formik.errors.genderId && formik.touched.genderId ? <div className="text-danger">{formik.errors.genderId}</div> : null}
                      </Form.Group>
                    </Col>

                    <Col xxl={3} sm={6}>
                      <FormGroup className="mb-sm-3 mb-2">
                        <FormLabel className="form-label">
                          Date
                          <span style={{ color: "red" }}>*</span>
                        </FormLabel>

                        <FlatPickerSelectOnlyDateComponent
                          className="form-control"
                          name="dateOfBirth"
                          value={formik.values.dateOfBirth}
                          onChangeEvent={(date) => formik.setFieldValue("dateOfBirth", date)}
                        />
                      </FormGroup>
                    </Col>

                    <Col xxl={4} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Country <span className="required">*</span>
                        </Form.Label>
                        <ReactSelect
                          name="country"
                          placeholder={"Select Salutation"}
                          value={countryOptions.find((option) => option.value === formik.values.country)}
                          onChange={(selectedOption) => formik.setFieldValue("country", selectedOption ? selectedOption.value : "")}
                          options={countryOptions}
                          noOptionsMessage={() => "No record found"}
                          isClearable={true}
                          isSearchable={true}
                        />
                        {formik.errors.country && formik.touched.country ? <div className="text-danger">{formik.errors.country}</div> : null}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-lg-3 g-2 mb-sm-4 mb-2 row">
                    <h4 className="forms-sub-heading">Login Information</h4>

                    <Col xxl={12} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Email <span className="required">*</span>
                        </Form.Label>
                        <Form.Control type="email" name="email" isInvalid={formik.touched.email && !!formik.errors.email} {...formik.getFieldProps("email")} />
                        <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xxl={6} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Password <span className="required">*</span>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          isInvalid={formik.touched.password && !!formik.errors.password}
                          {...formik.getFieldProps("password")}
                          minLength={8}
                          maxLength={20}
                        />
                        <span>Note: Password should be between 8 to 20 characters and must contain at least one capital letter and one number.</span>
                        <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xxl={6} sm={6}>
                      <Form.Group className="mb-sm-3 mb-2">
                        <Form.Label className="form-label">
                          Confirm Password <span className="required">*</span>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
                          {...formik.getFieldProps("confirmPassword")}
                          minLength={8}
                          maxLength={20}
                        />
                        <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>{" "}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-lg-3 g-2 legend-div mb-4">
                    <Col xs={12}>
                      <h4 className="forms-sub-heading">Legal Information</h4>
                    </Col>
                    <Col xxl={12} sm={6}>
                      <Form.Group controlId="isTermsAgreed">
                        <Form.Check
                          className={formik.errors.isTermsAgreed ? "is-invalid" : ""}
                          type="checkbox"
                          name="isTermsAgreed"
                          label="I consent to The Well's Terms & Condition as published from time to time."
                          isInvalid={formik.touched.isTermsAgreed && !!formik.errors.isTermsAgreed}
                          onChange={(e) => {
                            const val = e.target.checked ? 1 : 0;
                            formik.setFieldValue("isTermsAgreed", val);
                          }}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.isTermsAgreed && formik.errors.isTermsAgreed ? <Form.Control.Feedback type="invalid">{formik.errors.isTermsAgreed}</Form.Control.Feedback> : null}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Form.Group className="d-flex justify-content-end">
                        <Button type="submit" variant="primary">
                          Save
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            // Handle cancel logic here
                          }}
                        >
                          Cancel
                        </Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUpComponent;
