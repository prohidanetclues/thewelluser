import axiosInstance from "@/utils/axiosInstances";

export const GetGeneralSettingsDataApi = async ({}) => {
  try {
    const response = await axiosInstance.post(`/general-settings/get-user-settings-list/`);
    return response.data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
