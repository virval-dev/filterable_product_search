import React from "react";
import { useState, useEffect } from "react";
import CategorySelection from "./CategorySelection";

const SearchBarComponent: React.FC = () => {
  // code
  const [isInStock, setIsInStock] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInStock((prevValue) => !prevValue);
  };

  const handleCategoryChange = (category: string) => {
    console.log(category);
  };

  return (
    <div className="search-bar-component">
      <input id="search-bar" className="search-bar" placeholder="Search..." />

      <div className="search-condition-wrapper">
        <CategorySelection onCategoryChange={handleCategoryChange} />
        <div className="checkbox-wrapper">
          <label htmlFor="checkbox" className="in-stock-label">
            In Stock?
          </label>
          <input
            type="checkbox"
            checked={isInStock}
            className="in-stock-checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarComponent;
