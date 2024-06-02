import axios from "axios";

interface Credentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register = async (credentials: Credentials) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/v1/register`,
      credentials
    );
    console.log("Registration response:", response.data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
      throw errorMessage;
    }
    return error;
  }
};

export const Login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/login`, credentials);
    console.log("Login response:", response.data);
    return response.data;
  } catch (error:any) {
    if (error.response) {
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
      throw errorMessage;
    }
  }
};
