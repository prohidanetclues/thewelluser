import axiosInstance from "@/utils/axiosInstances";

export const ForgotPasswordApi = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/user-forgot-password", data);
    return response.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "An error occurred" };
  }
};
