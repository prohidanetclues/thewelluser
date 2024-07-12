import axiosInstance from "@/utils/axiosInstances";
// import { updateUsersInfoRedux } from "../store/users/action";

const BASE_URL = process.env.REACT_APP_BASE_URL;
var myHeaders = new Headers();
const token = localStorage.getItem("token");``
myHeaders.append("Authorization", `Bearer ${token}`);

export const GetProfileDetail = async () => {
  try {
    const response = await axiosInstance.get(`/users/profile-get`);
    const responseData = response.data || {};
    return {
      success: responseData.success,
      user: responseData.user || null,
      message: responseData.message || "Internal Server Error",
    };
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};

export const PatchProfileUpdate = async (request) => {
  try {
    const response = await axiosInstance.patch(`/users/profile-update`, request);
    const responseData = response.data || {};
    return {
      success: responseData.success,
      message: responseData.message || "Internal Server Error",
    };
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};