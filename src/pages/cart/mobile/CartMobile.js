import "./cart-mobile.css";
import { useHomeContext } from "../../../context/HomeContext";
import { CartSummaryCard } from "../../../components/cartSummaryCard/CartSummaryCard";
import { useNavigate } from "react-router-dom";
import { totalCartPrice } from "../CartFunctions";
import back from "../../../icons/back.png"
import { CartCard } from "../../../components/cartCard/CartCard";
import cartempty from "../../../icons/cartempty.svg";

export const CartMobile = () => {
  const { state } = useHomeContext();
  const navigate = useNavigate();

  return (
    <div>
      <div className="cart-block">
        <div className="cart-header flex-row">
          <img
            src={back}
            className="back-icon"
            onClick={() => navigate("/products")}
          />
          <h2>CART ({state.cart.length}) </h2>
        </div>

        <div className="cart-product">
          {state.cart.map((product) => {
            return (
              <>
                <CartCard product={product} />
              </>
            );
          })}

          {state.cart.length !== 0 ? (
            <CartSummaryCard />
          ) : (
            <div>
              <div className="cart-empty flex-column">
                <img className="empty-icon" src={cartempty} />
                <p> Your Cart is empty! </p>
                {state.wishList.length !== 0 ? (
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
                ) : (
                  <div>
                    <button
                      onClick={() => navigate("/products")}
                      className="button button-primary "
                    >
                      SHOP NOW{" "}
                    </button>{" "}
                  </div>
                )}{" "}
              </div>
            </div>
          )}
        </div>

        <div className="cart-footer flex-row">
          <div>
            {" "}
            <h2> ₹{totalCartPrice()} </h2>{" "}
          </div>
          <div className="cart-order-button shadow">PROCEED &gt; </div>
        </div>
      </div>
    </div>
  );
};
