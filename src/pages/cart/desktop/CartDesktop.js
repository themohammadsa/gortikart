import "./cart-desktop.css";
import { useHomeContext } from "../../../context/HomeContext";
import { CartSummaryCard } from "../../../components/cartSummaryCard/CartSummaryCard";
import { useNavigate } from "react-router-dom";

import { CartCard } from "../../../components/cartCard/CartCard";
import cartempty from "../../../icons/cartempty.svg";

export const CartDesktop = () => {
  const { state } = useHomeContext();
  const navigate = useNavigate();
 
  const PendingWishList = () => {
    return (
      <div className="flex-column">
        <small>You have pending items in your wishlist.</small>
        <div className="flex-row cart-empty-button">
          <button
            onClick={() => navigate("/wishlist")}
            className="button button-secondary "
          >
            {" "}
            GO TO WISHLIST{" "}
          </button>
          <button
            onClick={() => navigate("/products")}
            className="button button-primary "
          >
            SHOP NOW{" "}
          </button>{" "}
        </div>
      </div>
    );
  };

  const ShopNow = () => {
    return (
      <div>
        <button
          onClick={() => navigate("/products")}
          className="button button-primary "
        >
          SHOP NOW{" "}
        </button>{" "}
      </div>
    );
  };

  const CartEmpty = () => {
    return (
      <div>
        <div className="cart-empty flex-column scale-11">
          <img className="empty-icon" src={cartempty} />
          <p> Your Cart is empty! </p>

          {state.wishList.length !== 0 ? <PendingWishList /> : <ShopNow />}
        </div>{" "}
      </div>
    );
  };

  return (
    <div>
      <div className="cart">
        <h2>My Cart ({state.cart.length}) </h2>

        {state.cart.length !== 0 ? (
          <div className="cart-grid-desktop">
            <div className="cart-product ">
              {state.cart.map((product) => {
                return (
                  <>
                    <CartCard product={product} />
                  </>
                );
              })}{" "}
            </div>
            <div className="flex-column cart-summary-flex">
              <CartSummaryCard />
              <div>
                {" "}
                <button className="order-button shadow">PROCEED {">"} </button>{" "}
              </div>
            </div>{" "}
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};
