import axios from 'axios';
import { errorHandler } from './errorHandler';

const API_URL = 'https://gortikart.themohammadsa.repl.co';

export const getProducts = async (url) => {
  try {
    const response = await axios.get(`${API_URL}${url}`);
    return response.data.products;
  } catch (error) {
    return errorHandler(error);
  }
};
