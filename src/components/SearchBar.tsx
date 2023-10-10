import React from "react";

const SearchBarComponent: React.FC = () => {
  // code

  return (
    <div className="search-bar-component">
      <input id="search-bar" className="search-bar" placeholder="Search..." />
      <div className="search-condition-wrapper">
        <div className="category-wrapper">
          <label htmlFor="categories" className="categories-label">
            Categories:
          </label>
          <select id="categories" className="categories-select">
            <option value="all">All</option>
            <option value="clothing">Clothing</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
            <option value="electronics">Electronics</option>
            <option value="home">Home</option>
            <option value="beaty">Beauty</option>
            <option value="food">Food</option>
          </select>
        </div>

        <div className="select-wrapper">
          <label htmlFor="checkbox" className="in-stock-label">
            In Stock?
          </label>
          <input type="checkbox" value="true" className="in-stock-checkbox" />
        </div>
      </div>
    </div>
  );
};

export default SearchBarComponent;
