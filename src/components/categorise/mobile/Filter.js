import "./categorise-mobile.css";
import { useHomeContext } from "../../../context/HomeContext";
import back from "../../../icons/back.png";
import { useProductContext } from "../../../context/ProductContext";

export const Filter = () => {
  const { state, dispatch } = useHomeContext();

  const {
    filterItem,
    setFilterItem,
    toggleDisplayFilter,
    payloadParse
  } = useProductContext();

  return (
    <>
      <div className="filter-content">
        <div className="filter-header flex-row">
          <img
            src={back}
            className="back-icon"
            onClick={() => toggleDisplayFilter()}
          />
          <h2>FILTERS </h2>
        </div>

        <div className="grid-left">
          {Object.keys(state.filterCategories).map((key) => {
            return (
              <>
                <li
                  style={{
                    backgroundColor: `${filterItem === key ? "white" : ""}`
                  }}
                  className="filter-list-keys"
                  onClick={() => setFilterItem(key)}
                >
                  {" "}
                  {key}{" "}
                </li>
              </>
            );
          })}
        </div>
        <div className="grid-right">
          {state.filterCategories[filterItem].map((item) => {
            return (
              <>
                <label className="filter-list">
                  <input
                    className="filter-list-items"
                    type="checkbox"
                    checked={
                      state?.[payloadParse(item)]
                        ? state[payloadParse(item)]
                        : state.filterBy.includes(payloadParse(item))
                    }
                    onChange={(e) => {
                      dispatch({
                        type: "FILTER_BY",
                        key: payloadParse(filterItem),
                        action: {
                          payload: payloadParse(item)
                        }
                      });
                    }}
                  ></input>
                  {item}
                </label>
              </>
            );
          })}
        </div>

        <div className="filter-footer flex-row">
          <div
            className="filter-footer-button "
            onClick={() => {
              toggleDisplayFilter();
              dispatch({ type: "CLEAR_ALL" });
            }}
          >
            <span style={{ fontWeight: "300" }}> CLEAR ALL </span>
          </div>
          <div
            className="filter-footer-button"
            onClick={() => toggleDisplayFilter()}
          >
            APPLY
          </div>
        </div>
      </div>
    </>
  );
};
