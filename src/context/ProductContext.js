import { useContext, createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [displaySort, setDisplaySort] = useState(false);
  const [filterItem, setFilterItem] = useState("Availability");
  const [displayFilter, setDisplayFilter] = useState(false);
  const [NavBarDisplay, setNavBarDisplay] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastShow, setToastShow] = useState(false);

  const toggleDisplaySort = () => setDisplaySort((block) => !block);
  const toggleDisplayFilter = () => setDisplayFilter((block) => !block);
  const toggleSetNavBarDisplay = () => setNavBarDisplay((block) => !block);

  const payloadParse = (item) => {
    return item.toUpperCase().split(" ").join("_");
  };

  return (
    <ProductContext.Provider
      value={{
        displaySort,
        setDisplaySort,
        filterItem,
        setFilterItem,
        toggleDisplaySort,
        toggleDisplayFilter,
        displayFilter,
        setDisplayFilter,
        NavBarDisplay,
        setNavBarDisplay,
        toggleSetNavBarDisplay,
        payloadParse,
        toastText,
        setToastText,
        toastShow,
        setToastShow
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
