import "./wish-list.css";
import wishlistempty from "../../icons/wishlistempty.png";
import { useNavigate } from "react-router-dom";
import { useHomeContext } from "../../context/HomeContext";
import { WishListCard } from "../../components/wishListCard/WishListCard";
import { Footer } from "../../components/footer/Footer";
import { Toast } from "../../components/toast/Toast";

export const WishList = () => {
  const { state } = useHomeContext();
  const navigate = useNavigate();

  const PendingCart = () => {
    return (
      <div className="flex-column">
        <small>You have pending items in your cart.</small>
        <div className="flex-row wishlist-empty-button">
          <button
            onClick={() => navigate("/cart")}
            className="button button-secondary "
          >
            {" "}
            GO TO CART{" "}
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

  return (
    <div>
      <div className="wishlist flex-column align-center">
        {state.wishList.map((product, index) => {
          return (
            <div key={index}>
              <WishListCard product={product} />
            </div>
          );
        })}

        {state.wishList.length === 0 && (
          <div>
            <div className="cart-empty scale-11 flex-column">
              <img style={{ margin: "3rem" }} src={wishlistempty} />

              <p style={{ marginBottom: "1rem" }}> Your Wishlist is empty! </p>

              {state.cart.length !== 0 ? <PendingCart /> : <ShopNow />}
            </div>
          </div>
        )}
      </div>{" "}
      <Toast />
      <Footer />
    </div>
  );
};
