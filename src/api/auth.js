import axios from 'axios';

const loginAdmin = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:8081/auth/login', credentials, {
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
      const response = await axios.post('http://localhost:8081/auth/signup', credentials, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export { loginAdmin,signupAdmin };
