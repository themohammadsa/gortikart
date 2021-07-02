import axios from 'axios';
import { errorHandler } from './errorHandler';

const API_URL = 'https://gortikart.themohammadsa.repl.co/user';

export const addToWishList = async (productId) => {
  try {
    const response = await axios.post(`${API_URL}/wishlist/add`, {
      productId,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const removeFromWishList = async (productId) => {
  try {
    const response = await axios.post(`${API_URL}/wishlist/remove`, {
      productId,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const moveToWishList = async (productId) => {
  try {
    const response = await axios.post(`${API_URL}/wishlist/move`, {
      productId,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};
