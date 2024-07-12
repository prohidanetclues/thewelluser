import axiosInstance from "@/utils/axiosInstances";

export const GetContactDetailsApi = async () => {
  try {
    const { data } = await axiosInstance.get("contact-us/get");
    return data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
