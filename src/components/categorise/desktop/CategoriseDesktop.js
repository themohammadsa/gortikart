import "./categorise-desktop.css";
import { useProductContext } from "../../../context/ProductContext";
import { useHomeContext } from "../../../context/HomeContext";

export const CategoriseDesktop = () => {
  const { payloadParse } = useProductContext();
  const { state, dispatch } = useHomeContext();

  return (
    <div>
      <div className="categorise flex-column align-center">
        <h3 className="pointer" onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          {" "}
          CLEAR ALL{" "}
        </h3>
        <div className="categorise-block flex-column">
          <h3>SORT BY</h3>
          {state.sortCategories.map((item) => {
            return (
              <>
                <label className="categorise-sort-label">
                  <input
                    type="radio"
                    name="sort"
                    checked={state.sortBy.includes(payloadParse(item))}
                    onChange={() =>
                      dispatch({
                        type: "SORT_BY",
                        payload: payloadParse(item)
                      })
                    }
                  ></input>{" "}
                  <span> {item} </span>
                </label>
              </>
            );
          })}
        </div>
        <hr />
        <div className="flex-column">
          <h3>FILTERS</h3>
          {Object.keys(state.filterCategories).map((key) => {
            return (
              <>
                <li className="categorise-filter">
                  <h5> {key.toUpperCase()} </h5>
                  {state.filterCategories[key].map((item) => {
                    return (
                      <>
                        <label className="categorise-filter-label">
                          <input
                            type="checkbox"
                            name="checkbox"
                            checked={
                              state?.[payloadParse(item)]
                                ? state[payloadParse(item)]
                                : state.filterBy.includes(payloadParse(item))
                            }
                            onChange={(e) => {
                              dispatch({
                                type: "FILTER_BY",
                                key: payloadParse(key),
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
                </li>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
