import "./categorise-mobile.css";
import { useHomeContext } from "../../../context/HomeContext";
import { useProductContext } from "../../../context/ProductContext";

export const Sort = () => {
  const { state, dispatch } = useHomeContext();

  const { toggleDisplaySort, payloadParse } = useProductContext();

  return (
    <>
      <div
        className="sort-block"
        onClick={(event) =>
          event.target.classList.contains("sort-block")
            ? toggleDisplaySort()
            : null
        }
      >
        <div className="sort-content">
          {state.sortCategories.map((item) => {
            return (
              <>
                <label>
                  <input
                    className="sort-input"
                    type="radio"
                    checked={state.sortBy.includes(payloadParse(item))}
                    onChange={() => {
                      toggleDisplaySort();
                      dispatch({
                        type: "SORT_BY",
                        payload: payloadParse(item)
                      });
                    }}
                  ></input>{" "}
                  {item}{" "}
                </label>
              </>
            );
          })}
        </div>{" "}
      </div>
    </>
  );
};
