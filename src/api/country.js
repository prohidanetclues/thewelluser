import axiosInstance from "@/utils/axiosInstances";

export const getCountries = async () => {
  try {
    const params = {};
    params.isActive = 1;

    const { data } = await axiosInstance.get(
      `/country-state-city/country-list`,
      {
        params,
      }
    );

    const { success, country, message, totalCountry } = data;
    let countryOptions = [];
    if (success) {
      countryOptions = country.map((item) => ({
        label: item.name,
        value: item.name,
      }));
    }

    return { success, country, message, totalCountry, countryOptions };
  } catch (error) {
    return error.response && error.response.data ? error.response.data : {success: false, message: "Technical Error"};
  }
};
