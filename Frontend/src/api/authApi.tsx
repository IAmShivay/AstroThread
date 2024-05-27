import axios from "axios";

export const Register = async (credentials: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`YOUR_REGISTER_ENDPOINT`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error occurred during registration:", error);

    return {
      error:
        "An unexpected error occurred during registration. Please try again later.",
    };
  }
};

export const login = async (credentials: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`YOUR_LOGIN_ENDPOINT`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error occurred during login:", error);

    return {
      error:
        "An unexpected error occurred during login. Please try again later.",
    };
  }
};

// const creditionals ={
//     name:'shivay',
//     email:'shivaysharma77893@gmail.com',
//     password:'hello'
// }
