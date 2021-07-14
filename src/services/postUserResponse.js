import axios from 'axios';
import { errorHandler } from './errorHandler';

const API_URL = 'https://gortikart.themohammadsa.repl.co/user';

export const postUserResponse = async (productId, category, command) => {
  try {
    const response = await axios.post(`${API_URL}/${category}/${command}`, {
      productId,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};
