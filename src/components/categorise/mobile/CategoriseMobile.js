import "./categorise-mobile.css";
import filter from "../../../icons/filter.png";
import sort from "../../../icons/sort.png";
import { Filter } from "./Filter";
import { Sort } from "./Sort";
import { useProductContext } from "../../../context/ProductContext";

export const CategoriseMobile = () => {
  const {
    displaySort,
    toggleDisplaySort,
    toggleDisplayFilter,
    displayFilter
  } = useProductContext();

  return (
    <div>
      <div className="categorise-footer flex-row ">
        <div
          className="categorise-footer-button border-right"
          onClick={() => toggleDisplaySort()}
        >
          <img src={sort} className="filter-icon" />
          <span> SORT </span>
        </div>
        <div
          className="categorise-footer-button"
          onClick={() => toggleDisplayFilter()}
        >
          <img src={filter} className="filter-icon" />
          <span> FILTERS </span>
        </div>
      </div>

      {displaySort && <Sort />}

      {displayFilter && <Filter />}
    </div>
  );
};
