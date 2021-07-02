import "./cart-card.css";
import { useHomeContext } from "../../context/HomeContext";
import { totalPrice } from "../../pages/cart/CartFunctions";
import { useProductContext } from "../../context/ProductContext";

export const CartCard = ({ product }) => {
  const { dispatch } = useHomeContext();
  const { setToastText, setToastShow } = useProductContext();

  return (
    <div className="cart-card flex-column ">
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
        <img src={product.image} className="cart-card-image desktop-scale2" />
      </div>

      <div className="cart-card-footer">
        <button
          className="cart-card-button border-right"
          onClick={() => {
            setToastShow(true);
            setToastText("Moved to Wishlist");
            dispatch({ type: "MOVE_TO_WISHLIST", payload: product });
          }}
        >
          {" "}
          ADD TO WISHLIST
        </button>

        <button
          className="cart-card-button"
          onClick={() => {
            setToastShow(true);
            setToastText("Removed from Cart");
            dispatch({ type: "REMOVE_FROM_CART", payload: product });
          }}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};
