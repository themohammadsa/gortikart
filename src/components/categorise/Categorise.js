import { CategoriseMobile } from "./mobile/CategoriseMobile";
import { CategoriseDesktop } from "./desktop/CategoriseDesktop";

export const Categorise = () => {
  return (
    <div>
      <div className="mobile">
        {" "}
        <CategoriseMobile />{" "}
      </div>
      <div className="desktop">
        {" "}
        <CategoriseDesktop />{" "}
      </div>
    </div>
  );
};
