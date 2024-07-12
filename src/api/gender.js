import axiosInstance from "@/utils/axiosInstances";

export const getGender = async () => {
  try {
    const params = {};
    params.isActive = 1;

    const { data } = await axiosInstance.get(
      `/gender-masters/get-genders-list`,
      {
        params,
      }
    );
    const { success, genders, message, totalGenders } = data;
    let genderOptions = [];
    if (success) {
      genderOptions = genders.map((item) => ({
        label: item.title,
        value: item.id,
      }));
    }
    return { success, genders, message, totalGenders, genderOptions };
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
