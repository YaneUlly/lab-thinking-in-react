import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const [searchTerm, setSearchTerm] = useState('');
  // empty string representing the user input

  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    // update the state by the onSearchChanged based in the user input
  };

  const handleInStockChange = (isChecked) => {
    setInStockOnly(isChecked);
  };

  // filter products based on the search term
  // filter producst based on their availability
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => (inStockOnly ? product.inStock : true));
  // if the product is in stock, back true

  return (
    <div>
      <div className="searchbar">
        <SearchBar
          onSearchChange={handleSearchChange}
          onInStockChange={handleInStockChange}
        />
      </div>
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
