import axiosInstance from "@/utils/axiosInstances";

export const getSalutationsData = async () => {
  try {
    const params = {
      isActive: 1,
    };
    const { data } = await axiosInstance.get(
      `/salutations-masters/get-salutations-data`,
      {
        params,
      }
    );

    const { success, salutations, message, totalSalutations } = data;
    let salutationOptions = {};
    if (success) {
      salutationOptions = salutations.map((salutation) => ({
        value: salutation.id,
        label: salutation.title,
      }));
    }
    return {
      success,
      salutations,
      salutationOptions: salutationOptions,
      message,
      totalSalutations,
    };
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
