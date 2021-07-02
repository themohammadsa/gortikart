import "./toast.css";
import { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";

export const Toast = () => {
  const { toastText, toastShow, setToastShow } = useProductContext();

  useEffect(() => {
    setTimeout(() => setToastShow(false), 4000);
  });

  return (
    <div>
      {toastShow && (
        <div className="toast-content shadow">
          {toastText}
          <span
            onClick={() => setToastShow(false)}
            className="toast-dismiss pointer"
          >
            ×
          </span>
        </div>
      )}
    </div>
  );
};
