import axios from "axios";

const API_URL = "http://localhost:8081"; 

 const getBusinessProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/business/profile`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateBusinessProfile = async (profileData) => {
  try {
    const response = await axios.put(`${API_URL}/business/profile`, profileData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export { getBusinessProfile,updateBusinessProfile };