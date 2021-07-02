import "./home-page.css";
import { useNavigate } from "react-router-dom";
import coverimage from "../../icons/coverimage.jpg";
import { Footer } from "../../components/footer/Footer";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-page">
        <div className="headline-offer">
          <p>
            New student deal | Get up to 30%{" "}
            <strong>
              {" "}
              <br /> Offer ends by midnight!{" "}
            </strong>{" "}
          </p>
        </div>
        <div className="cover">
          <img
            onClick={() => navigate("/products")}
            src={coverimage}
            className="cover-image"
          />{" "}
        </div>
        <div className="categories">
          <h2>Shop by Categories </h2>
          <div className="flex-row">
            <img
              className="category-img"
              src="https://images-na.ssl-images-amazon.com/images/I/71QwKtoCE1L._SL1500_.jpg"
              onClick={() => navigate("/products/tablets")}
            />

            <img
              className="category-img"
              src="https://images-na.ssl-images-amazon.com/images/I/91P7uBC9DML._AC_SL1500_.jpg
"
              onClick={() => navigate("/products/laptops")}
            />
            <img
              className="category-img"
              src="https://images-na.ssl-images-amazon.com/images/I/614XzupRxFL._AC_SL1125_.jpg"
              onClick={() => navigate("/products/desktops")}
            />
            <img
              className="category-img"
              src="https://images-na.ssl-images-amazon.com/images/I/61v%2BtaI5jvL._SL1500_.jpg"
              onClick={() => navigate("/products/accessories")}
            />
          </div>
        </div>
        <div className="categories" onClick={() => navigate("/products")}>
          <h2>Shop by Brands </h2>
          <div className="flex-row">
            <img
              className="category-img"
              src="https://1000logos.net/wp-content/uploads/2017/02/HP-Logo-2009.jpg"
            />
            <img
              className="category-img"
              src="https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1-640x400.png"
            />
            <img
              className="category-img"
              src="https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo-640x400.png
"
            />
            <img
              className="category-img"
              src="https://openlab.citytech.cuny.edu/cwang-eportfolio/files/2013/11/dell-logo.jpg"
            />
          </div>
        </div>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
};
