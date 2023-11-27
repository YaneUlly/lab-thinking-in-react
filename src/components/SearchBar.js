import React from 'react';

function SearchBar({ onSearchChange, onInStockChange }) {
  // onSearchChange updated the component in ProductsPage
  return (
    <div className="search-bar">
      <p>Search</p>
      <input
        type="text"
        id="search"
        placeholder="Search.."
        onChange={(e) => onSearchChange(e.target.value)}
        // everytime user input the onChange called the fuction onSearchChange
      ></input>
      <label>
        <input
          className="showstock"
          type="checkbox"
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
