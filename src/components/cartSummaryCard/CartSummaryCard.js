import "./cart-summary-card.css";
import {
  totalCartPrice,
  totalOffer,
  totalMRP
} from "../../pages/cart/CartFunctions";

export const CartSummaryCard = ({ product }) => {
  return (
    <div className="summary-card flex-column">
      <div className="summary-card-header flex-row">
        <span> PRICE DETAILS </span>
      </div>

      <div className="flex-column">
        <div className="summary-card-text flex-row">
          <p>Cart Total (1 item) </p>
          <p> ₹{totalMRP()} </p>
        </div>

        <div style={{ color: "green" }} className="summary-card-text flex-row">
          <p>Cart Discount </p>
          <p> -₹{totalOffer()} </p>
        </div>

        <div className="summary-card-text flex-row">
          <p>Sub Total </p>
          <p> ₹{totalCartPrice()} </p>
        </div>

        <div className="summary-card-text flex-row">
          <p>Shipping Charges </p>
          <p style={{ color: "green" }}> FREE </p>
        </div>

        <div
          style={{ fontWeight: "bolder" }}
          className="summary-card-text flex-row"
        >
          <p>Grand Total </p>
          <p> ₹{totalCartPrice()} </p>
        </div>
      </div>
    </div>
  );
};
