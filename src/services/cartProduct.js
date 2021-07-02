import axios from 'axios';
import { errorHandler } from './errorHandler';

const API_URL = 'https://gortikart.themohammadsa.repl.co/user';

export const addToCart = async (productId) => {
  try {
    const response = await axios.post(`${API_URL}/cart/add`, {
      productId
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const removeFromCart = async (productId) => {
  try {
    const response = await axios.post(`${API_URL}/cart/remove`, {
      productId
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const moveToCart = async (productId) => {
  try {
    const response = await axios.post(`${API_URL}/cart/move`, {
      productId
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};