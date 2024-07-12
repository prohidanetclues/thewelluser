import axiosInstance from "@/utils/axiosInstances";

export const GetBannerListApi = async () => {
  try {
    const { data } = await axiosInstance.get("/banners/show-banners");
    return data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
