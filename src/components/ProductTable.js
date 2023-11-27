import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((products) => (
          <ProductRow key={products.id} product={products} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
