import axiosInstance from "@/utils/axiosInstances";

export const GetPackagesApi = async () => {
  try {
    const response = await axiosInstance.get("/packages/get-active-packages-list");
    return response.data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
