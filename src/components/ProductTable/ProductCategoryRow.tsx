import React from "react";

interface Props {
  category: string;
}

const ProductCategoryRow: React.FC<Props> = ({ category }) => {
  // code

  return (
    <div className="product-category-row">
      <h3 className="product-category-header">{category}</h3>
    </div>
  );
};

export default ProductCategoryRow;
