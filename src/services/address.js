import axios from 'axios';
import { errorHandler } from './errorHandler';

const API_URL = 'https://gortikart.themohammadsa.repl.co/user/address';

export const addAddress = async ({ address }) => {
  try {
    const response = await axios.post(`${API_URL}/add`, {
      address,
    });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const getAddress = async () => {
  try {
    const response = await axios.get(`${API_URL}/get`);
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const removeAddress = async ({ id }) => {
  try {
    const response = await axios.post(`${API_URL}/remove`, {
      id,
    });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};
