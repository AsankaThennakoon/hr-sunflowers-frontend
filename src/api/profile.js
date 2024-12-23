
import apiClient from "./axiosConfig";
 const getBusinessProfile = async () => {
  try {
    const response = await apiClient.get(`/business/profile`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateBusinessProfile = async (profileData) => {
  try {
    const response = await apiClient.put(`/business/profile`, profileData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export { getBusinessProfile,updateBusinessProfile };