import "./wish-list-card.css";
import { useHomeContext } from "../../context/HomeContext";
import { useProductContext } from "../../context/ProductContext";
import { totalPrice } from "../../pages/cart/CartFunctions";

export const WishListCard = ({ product }) => {
  const { dispatch } = useHomeContext();
  const { setToastText, setToastShow } = useProductContext();

  return (
    <div className="wishlist-card flex-column ">
      <div className="flex-row card-row">
        <div className="flex-column card-column">
          <span className="heading"> {product.name} </span>
          <span className="line-spacing-1rem">
            <span className="total-price">
              {" "}
              MRP:{" "}
              <span className="line-through">
                {" "}
                ₹{totalPrice(product.price, product.offer)}{" "}
              </span>{" "}
            </span>
            <span className="new-price"> ₹{product.price} </span>
            <span className="total-price"> | </span>
            <span className="discount"> {product.offer}% off </span>
          </span>

          <br />
          <span className="line-spacing">Exchange, 100% Money Back</span>
          <span className="line-spacing">No Cost EMI</span>
        </div>
        <img src={product.image} className="wishlist-card-image" />
      </div>

      <div className="wishlist-card-footer">
        <button
          className="wishlist-card-cart-button border-right"
          onClick={() => {
            setToastShow(true);
            setToastText("Moved to Cart");
            dispatch({ type: "MOVE_TO_CART", payload: product });
          }}
        >
          {" "}
          MOVE TO CART
        </button>

        <button
          className="wishlist-card-cart-button"
          onClick={() => {
            setToastShow(true);
            setToastText("Removed from Wishlist");
            dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
          }}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};
