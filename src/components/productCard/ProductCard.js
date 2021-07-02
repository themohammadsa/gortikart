import './product-card.css';
import filledHeart from '../../icons/filledHeart.png';
import unfilledHeart from '../../icons/unfilledHeart.png';
import { useNavigate } from 'react-router-dom';
import { useHomeContext } from '../../context/HomeContext';
import { useProductContext } from '../../context/ProductContext';
import { totalPrice } from '../../pages/cart/CartFunctions';

export const ProductCard = ({ product }) => {
  const { state, dispatch } = useHomeContext();
  const { setToastText, setToastShow } = useProductContext();
  const navigate = useNavigate();
  return (
    <div>
      <div className="product-card flex-column">
        {!product.inStock && (
          <div className="out-of-stock">
            {' '}
            <span> TEMPORARILY UNAVAILABLE </span>
          </div>
        )}

        <img src={product.image} className="product-card-image" />
        <span className="heading"> {product.name} </span>
        <span className="line-spacing-1rem">
          <span className="total-price">
            {' '}
            MRP:{' '}
            <span className="line-through">
              {' '}
              ₹{totalPrice(product.price, product.offer)}{' '}
            </span>{' '}
          </span>
          <span className="new-price"> ₹{product.price} </span>
          <span className="total-price"> | </span>
          <span className="discount"> {product.offer}% off </span>
        </span>
        <span className="line-spacing">
          {' '}
          <span className="rating">{product.starRating} ★</span>
          <span className="reviews"> ({product.totalReviews}) </span>
        </span>
        <span className="line-spacing">Exchange, 100% Money Back</span>
        <span className="line-spacing">No Cost EMI</span>

        <div>
          <div className="product-card-footer">
            {state.wishList.includes(product) ? (
              <img
                src={filledHeart}
                className="wishlist-emoji"
                onClick={() => {
                  setToastShow(true);
                  setToastText('Removed from Wishlist');
                  dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
                }}
              />
            ) : (
              <img
                src={unfilledHeart}
                className="wishlist-emoji"
                onClick={() => {
                  setToastShow(true);
                  setToastText('Moved to Wishlist');
                  dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
                }}
              />
            )}

            {state.cart.includes(product) ? (
              <button
                className="add-to-cart-button"
                onClick={() => navigate('/cart')}
              >
                GO TO CART{' '}
              </button>
            ) : (
              <button
                className="add-to-cart-button"
                onClick={() => {
                  setToastShow(true);
                  setToastText('Added to Cart');
                  dispatch({ type: 'ADD_TO_CART', payload: product });
                }}
              >
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
