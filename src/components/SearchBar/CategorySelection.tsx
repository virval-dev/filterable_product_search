import React, { useState } from "react";

interface CategorySelectionProps {
  onCategoryChange: (category: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="categories-wrapper">
      <label htmlFor="categories" className="categories-label">
        Categories:
      </label>
      <select
        id="categories"
        className="categories-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
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
  );
};

export default CategorySelection;
