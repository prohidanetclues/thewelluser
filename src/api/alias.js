import axiosInstance from "@/utils/axiosInstances";


export const CheckAliasExistsApi = async ({ alias }) => {
  try {
    const response = await axiosInstance.post(`/alias/check-alias-exist/`, { alias });
    return response.data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};

export const GetMetaInfoBySlugApi = async ({ alias = null }) => {
  try {
    const response = await axiosInstance.get(`/alias/get-meta-info/`, { params: { alias } });
    return response.data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
