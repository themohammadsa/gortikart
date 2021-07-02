import axios from 'axios';
import { errorHandler } from '../errorHandler';

const API_URL = 'https://gortikart.themohammadsa.repl.co/user';

async function loginUser({ email, password }) {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
}

export { loginUser };
