import axios from 'axios';
import { errorHandler } from './errorHandler';

const API_URL = 'https://gortikart.themohammadsa.repl.co/user';

export const getUserData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};
