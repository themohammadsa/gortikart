import axios from 'axios';
import { errorHandler } from '../errorHandler';

const API_URL = 'https://gortikart.themohammadsa.repl.co/user';

async function createUser({ name, email, password }) {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
}

export { createUser };
