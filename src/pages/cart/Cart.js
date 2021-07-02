import { CartDesktop } from "./desktop/CartDesktop";
import { CartMobile } from "./mobile/CartMobile";
import { Footer } from "../../components/footer/Footer";
import { Toast } from "../../components/toast/Toast";

export const Cart = () => {
  return (
    <div className="bottom-spacing">
      <div className="desktop">
        <CartDesktop />
      </div>
      <div className="mobile">
        <CartMobile />
      </div>
      <Toast />
      <Footer />
    </div>
  );
};
