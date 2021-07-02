import { useHomeContext } from "../../context/HomeContext";

export const totalPrice = (price, offer) => {
  return (offer / 100) * price + Number(price);
};

export const totalCartPrice = () => {
  const { state } = useHomeContext();
  return state.cart.reduce((total, value) => {
    return Math.round(Number(total) + Number(value.price));
  }, 0);
};

export const totalOffer = () => {
  const { state } = useHomeContext();
  return state.cart.reduce((total, value) => {
    return Math.round(Number(total) + (value.offer / 100) * Number(value.price));
  }, 0);
};

export const totalMRP = () => {
  const { state } = useHomeContext();
  return state.cart.reduce((total, value) => {
    return Math.round(
      Number(total) + ((value.offer / 100) * Number(value.price) + Number(value.price))
    );
  }, 0);
};
