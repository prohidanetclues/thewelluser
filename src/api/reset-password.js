import axiosInstance from "@/utils/axiosInstances";

export const ResetPasswordApi = async ({ data }) => {
  try {
    const response = await axiosInstance.post("/auth/user-reset-password", data);
    return response.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "An error occurred" };
  }
};
