// our-team/api.js

import axiosInstance from "@/utils/axiosInstances";

export const GetTeamListDetailsApi = async () => {
  try {
    const response = await axiosInstance.get("/staff/our-team-list");
    return response.data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};

export const GetTeamListDetailsByIdApi = async ({ id }) => {
  try {
    const { data } = await axiosInstance.get(`/staff/our-team/${id}`);
    return data;
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
