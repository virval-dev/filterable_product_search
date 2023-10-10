import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTableComponent: React.FC = () => {
  // code

  return (
    <div className="product-table-component">
      <div className="product-table-header">
        <h5 className="product-table-text">Name</h5>
        <h5 className="product-table-text">Price</h5>
        <h5 className="product-table-text">Quantity</h5>
      </div>

      <ProductCategoryRow category="Fruits" />
    </div>
  );
};

export default ProductTableComponent;
