import axiosInstance from "@/utils/axiosInstances";

export const SignInApi = async (request) => {
  try {
    const response = await axiosInstance.post("/auth/user-login", request);
    return response.data;
  } catch (error) {
    console.error("Error in SignInApi:", error);
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};

export const SignUpApi = async (request) => {
  try {
    const response = await axiosInstance.post("/users/register", request);
    return response.data;
  } catch (error) {
    console.error("Error forgot password:", error);
    // Log more details from the response if available
    if (error.response) {
      console.error("Response data:", error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"});
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    return error.response?.data || { success: false, message: "An error occurred" };
  }
};
