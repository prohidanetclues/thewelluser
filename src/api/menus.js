const { default: axiosInstance } = require("@/utils/axiosInstances");

export const GetSiteMenusHierarchyApi = async () => {
  try {
    const { data } = await axiosInstance.get(`/menus/get-site-menus-hierarchy`);
    return data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
