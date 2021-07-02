import "./search-bar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const navigateToSearch = () => {
    navigate(`/products/search/search?results=${encodeURI(search)}`);
  };

  return (
    <div className="column-header flex-row">
      <input
        className="search-box"
        type="search"
        name="sort"
        placeholder="🔍   Search for products, brands and more"
        onChange={(event) => setSearch(event.target.value)}
        onKeyUp={navigateToSearch}
      />{" "}
    </div>
  );
};
