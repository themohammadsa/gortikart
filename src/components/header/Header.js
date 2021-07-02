import './header.css';
import { NavBar } from '../navBar/NavBar';
import logotext from '../../icons/logotext.png';
import wishlist from '../../icons/wishlist.png';
import cart from '../../icons/cart.png';
import { useNavigate } from 'react-router-dom';
import { useHomeContext } from '../../context/HomeContext';
import ham from '../../icons/ham.png';
import { BiLogInCircle } from 'react-icons/bi';
import { useProductContext } from '../../context/ProductContext';
import { SearchBar } from '../searchBar/SearchBar';
import { useAuthContext } from '../../context/AuthProvider';
import { setupTokenHeaderForAxios } from '../../services/setupTokenHeaderForAxios';

export const Header = () => {
  const navigate = useNavigate();
  const { state } = useHomeContext();

  const { toggleSetNavBarDisplay } = useProductContext();
  const { setToken, token } = useAuthContext();

  const logOutHandler = () => {
    localStorage.removeItem('loginStatus');
    setToken(null);
    setupTokenHeaderForAxios(null);
    navigate('/login');
  };

  return (
    <header className="header-bar">
      <div className="flex-row grid-header">
        <div className="left-grid">
          <img
            src={ham}
            className="icon-ham"
            onClick={toggleSetNavBarDisplay}
          ></img>
          <NavBar />{' '}
        </div>
        <div className="center-grid">
          <img
            onClick={() => navigate('/')}
            src={logotext}
            className="logotext"
          ></img>
        </div>

        <div className="right-grid flex-row scale-11">
          <div className="desktop search-desktop">
            {' '}
            <SearchBar />{' '}
          </div>
          <div
            onClick={() => navigate('/wishlist')}
            className="flex-row align-center pointer margin-right"
          >
            <div className="badge">
              <img src={wishlist} className="navbar-logo align-end" />{' '}
              {token && (
                <div className="badge-notif"> {state.wishList.length} </div>
              )}
            </div>{' '}
            <span className="desktop cart-icon-text">WISHLIST </span>
          </div>

          <div
            onClick={() => navigate('/cart')}
            className="flex-row align-center pointer "
          >
            <div className="badge">
              <img src={cart} className="navbar-logo align-end" />{' '}
              {token && <div className="badge-notif">{state.cart.length} </div>}
            </div>{' '}
            <span className="desktop cart-icon-text">CART </span>
          </div>

          {token && (
            <div
              onClick={logOutHandler}
              className="flex-row align-center pointer user "
            >
              <div className="user-icon">
                <BiLogInCircle />
              </div>
              <span className="desktop cart-icon-text">LOG OUT </span>
            </div>
          )}
        </div>
      </div>

      <div className="mobile">
        {' '}
        <SearchBar />{' '}
      </div>
    </header>
  );
};
