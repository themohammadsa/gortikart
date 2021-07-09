import { Routes, Route } from 'react-router-dom';
import { ProductList } from '../../pages/productList/ProductList';
import { HomePage } from '../../pages/home/HomePage';
import { Cart } from '../../pages/cart/Cart';
import { WishList } from '../../pages/wishList/WishList';
import { Error } from '../../pages/error/Error';
import { Login } from '../../pages/login/Login';
import { SignUp } from '../../pages/signUp/SignUp';
import { PrivateRoute } from './PrivateRoute';
import { Address } from '../../pages/address/Address';
import { CheckOutAddress } from '../../pages/address/CheckOutAddress';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <PrivateRoute path="/" element={<HomePage />} />
        <PrivateRoute path="/products/:category" element={<ProductList />} />
        <PrivateRoute
          path="/products/search/:searchResult"
          element={<ProductList />}
        />
        <PrivateRoute path="/products" element={<ProductList />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <PrivateRoute path="/wishlist" element={<WishList />} />
        <PrivateRoute path="/address" element={<Address />} />
        <PrivateRoute path="/cart/checkout" element={<CheckOutAddress />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
