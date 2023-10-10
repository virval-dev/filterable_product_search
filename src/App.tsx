import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import SearchBarComponent from "./components/SearchBar/SearchBarComponent";
import ProductTableComponent from "./components/ProductTable/ProductTable";

const App: React.FC = () => {
  // code

  return (
    <div className="App">
      <div className="container">
        <SearchBarComponent />
        <ProductTableComponent />
      </div>
    </div>
  );
};

export default App;
