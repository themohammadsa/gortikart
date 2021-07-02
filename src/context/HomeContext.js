import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
import { ReducerFunction } from '../reducer/ReducerFunction';
import { getProducts } from '../services/getProducts';
import { getUserData } from '../services/getUserData';
import { useAuthContext } from './AuthProvider';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [database, setDatabase] = useState([]);
  const [loader, setLoader] = useState(false);
  const { token } = useAuthContext();

  useEffect(async () => {
    if (token) {
      const products = await getProducts();
      const { cart, wishlist } = await getUserData();
      cartData(cart, products);
      wishListData(wishlist, products);
      setLoader(true);
      setDatabase(products);
    }
  }, [token]);

  const cartData = (cart, products) => {
    const updatedCart = cart.map((cartId) => {
      const updatedCartProduct = products.find(
        (product) => product.id === cartId
      );
      return updatedCartProduct;
    });
    state.cart = updatedCart;
  };

  const wishListData = (wishList, products) => {
    const updatedWishList = wishList.map((wishListId) => {
      const updatedWishListProduct = products.find(
        (product) => product.id === wishListId
      );
      return updatedWishListProduct;
    });
    state.wishList = updatedWishList;
  };

  const initialState = {
    wishList: [],
    cart: [],
    sortBy: '',
    FAST_DELIVERY: false,
    INCLUDE_OUT_OF_STOCK: false,
    search: '',
    filterBy: [],
    sortCategories: [
      'Most Reviews',
      'Popularity',
      'Price: High to Low',
      'Price: Low to High',
    ],
    filterCategories: {
      Categories: ['Tablets', 'Laptops', 'Desktops', 'Accessories'],
      Availability: ['Include out of stock'],
      Delivery: ['Fast Delivery'],
    },
  };

  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  const getSortedData = (productList, sortBy) => {
    switch (sortBy) {
      case 'PRICE:_HIGH_TO_LOW':
        return productList.sort((a, b) => b.price - a.price);
      case 'PRICE:_LOW_TO_HIGH':
        return productList.sort((a, b) => a.price - b.price);
      case 'POPULARITY':
        return productList.sort((a, b) => b.offer - a.offer);
      case 'MOST_REVIEWS':
        return productList.sort((a, b) => b.totalReviews - a.totalReviews);
      default:
        return productList;
    }
  };

  const getFilteredData = (
    productList,
    INCLUDE_OUT_OF_STOCK,
    FAST_DELIVERY,
    search,
    filterBy
  ) => {
    return productList
      .filter((item) => (FAST_DELIVERY ? item.fastDelivery : item))
      .filter((item) => (INCLUDE_OUT_OF_STOCK ? item : item.inStock))
      .filter((item) =>
        filterBy.length > 0
          ? filterBy.includes(item.categories.toUpperCase())
          : item
      )
      .filter((item) => item.name.toUpperCase().includes(search.toUpperCase()));
  };

  const sortedData = getSortedData(database, state.sortBy);
  const filteredData = getFilteredData(
    sortedData,
    state.INCLUDE_OUT_OF_STOCK,
    state.FAST_DELIVERY,
    state.search,
    state.filterBy
  );

  return (
    <HomeContext.Provider
      value={{ state, filteredData, dispatch, loader, setLoader }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
