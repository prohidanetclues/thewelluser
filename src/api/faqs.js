import axiosInstance from "@/utils/axiosInstances";

export const GetFaqsListApi = async (page = 1, limit = 10) => {
  try {
    const { data } = await axiosInstance.post(`/faqs/get-all-faq-list`, { page, limit });
    return data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
