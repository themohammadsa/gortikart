import "./nav-bar.css";
import logotext from "../../icons/logotext.png";
import products from "../../icons/products.png";
import cart from "../../icons/cart.png";
import home from "../../icons/home.png";
import wishlist from "../../icons/wishlist.png";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

export const NavBar = () => {
  const navigate = useNavigate();

  const { toggleSetNavBarDisplay, NavBarDisplay } = useProductContext();

  return (
    <>
      {NavBarDisplay ? (
        <nav
          className="nav-modal-block"
          onClick={(event) =>
            event.target.classList.contains("nav-modal-block")
              ? toggleSetNavBarDisplay()
              : null
          }
        >
          <div className="flex-row">
            <div className="nav-menu">
              <div className=" flex-row justify-space-between ">
                <img src={logotext} className="logo-text pad1rem" />{" "}
                <span
                  className="button-dismiss"
                  onClick={toggleSetNavBarDisplay}
                >
                  ×
                </span>
              </div>
              <div
                className="navbar-text"
                onClick={() => {
                  toggleSetNavBarDisplay();
                  navigate("/");
                }}
              >
                <img src={home} className="navbar-logo" />
                Home
              </div>

              <div
                className="navbar-text"
                onClick={() => {
                  toggleSetNavBarDisplay();
                  navigate("/products");
                }}
              >
                <img src={products} className="navbar-logo" />
                Products
              </div>
              <div
                className="navbar-text"
                onClick={() => {
                  toggleSetNavBarDisplay();
                  navigate("/cart");
                }}
              >
                <img src={cart} className="navbar-logo" />
                Cart
              </div>
              <div
                className="navbar-text"
                onClick={() => {
                  toggleSetNavBarDisplay();
                  navigate("/wishlist");
                }}
              >
                <img src={wishlist} className="navbar-logo" />
                Wishlist
              </div>
            </div>
            )
          </div>
        </nav>
      ) : null}
    </>
  );
};
