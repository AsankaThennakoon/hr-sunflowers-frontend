import apiClient from "./axiosConfig";

const loginAdmin = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials, {
      withCredentials: true,
    });
    console.log("Response: ", response.data);
    // Store the token in local storage
    localStorage.setItem("authToken", response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// API call for signup
const signupAdmin = async (credentials) => {
    try {
      const response = await apiClient.post('/auth/signup', credentials, {
        withCredentials: true,
      });
      console.log("Response: ", response.data);
    // Store the token in local storage
    localStorage.setItem("authToken", response.data.token);
    return response.data;
    } catch (error) {
      throw error;
    }
  };

export { loginAdmin,signupAdmin };
