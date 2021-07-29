import { address } from 'faker';
import { addAddress, removeAddress } from '../services/address';
import { postUserResponse } from '../services/postUserResponse';

export const ReducerFunction = (state, { type, payload, action, key }) => {
  switch (type) {
    case 'ADD_TO_CART':
      postUserResponse(payload.id, 'cart', 'add');
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case 'MOVE_TO_CART':
      postUserResponse(payload.id, 'cart', 'move');
      const productInCart = state.cart.some(
        (product) => product.id === payload.id
      );
      if (productInCart) {
        return {
          ...state,
          wishList: state.wishList.filter((item) => item.id !== payload.id),
        };
      } else {
        return {
          ...state,
          wishList: state.wishList.filter((item) => item.id !== payload.id),
          cart: [...state.cart, payload],
        };
      }
    case 'REMOVE_FROM_CART':
      postUserResponse(payload.id, 'cart', 'remove');
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case 'ADD_TO_WISHLIST':
      postUserResponse(payload.id, 'wishlist', 'add');
      if (state.wishList.some((product) => product.id === payload.id)) {
        return state;
      } else {
        return { ...state, wishList: [...state.wishList, payload] };
      }
    case 'MOVE_TO_WISHLIST':
      postUserResponse(payload.id, 'wishlist', 'move');
      if (state.wishList.some((product) => product.id === payload.id)) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== payload.id),
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== payload.id),
          wishList: [...state.wishList, payload],
        };
      }
    case 'REMOVE_FROM_WISHLIST':
      postUserResponse(payload.id, 'wishlist', 'remove');
      return {
        ...state,
        wishList: state.wishList.filter((item) => item.id !== payload.id),
      };
    case 'SET_ADDRESS':
      if (payload.address[0] !== null) {
        return {
          ...state,
          address: payload.address,
        };
      } else return state;
    case 'ADD_ADDRESS':
      addAddress(payload);
      console.log(payload);
      return {
        ...state,
        address: [...state.address, payload],
      };
    case 'REMOVE_ADDRESS':
      removeAddress(payload.address);
      return {
        ...state,
        address: state.address.filter(
          (address) => address._id !== payload.address._id
        ),
      };
    case 'SORT_BY':
      return {
        ...state,
        sortBy: payload,
      };
    case 'FILTER_BY':
      return filterByFn(state, action, key);
    case 'SEARCH':
      return {
        ...state,
        search: payload,
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        FAST_DELIVERY: false,
        INCLUDE_OUT_OF_STOCK: false,
        search: '',
        filterBy: [],
      };
    default:
      return {};
  }
};

const filterByFn = (state, action, key) => {
  switch (key) {
    case 'AVAILABILITY':
    case 'DELIVERY':
      return filterByBoolean(state, action.payload);
    case 'CATEGORIES':
      return filterByCategories(state, action.payload);
    default:
      return state;
  }
};

const filterByBoolean = (state, payload) => {
  switch (payload) {
    case 'INCLUDE_OUT_OF_STOCK':
      return {
        ...state,
        INCLUDE_OUT_OF_STOCK: !state.INCLUDE_OUT_OF_STOCK,
      };
    case 'FAST_DELIVERY':
      return {
        ...state,
        FAST_DELIVERY: !state.FAST_DELIVERY,
      };
    default:
      return state;
  }
};

const filterByCategories = (state, payload) => {
  if (!state.filterBy.includes(payload)) {
    switch (payload) {
      case 'TABLETS':
      case 'LAPTOPS':
      case 'DESKTOPS':
      case 'ACCESSORIES':
        return {
          ...state,
          filterBy: [...state.filterBy, payload],
        };
      default:
        return {
          ...state,
        };
    }
  } else {
    switch (payload) {
      case 'TABLETS':
      case 'LAPTOPS':
      case 'DESKTOPS':
      case 'ACCESSORIES':
        return {
          ...state,
          filterBy: state.filterBy.filter((item) => payload !== item),
        };
      default:
        return {
          ...state,
        };
    }
  }
};
