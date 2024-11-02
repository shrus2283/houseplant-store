// src/components/ProductListing.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Snake Plant', price: 20, category: 'Low Light', img: '${process.env.PUBLIC_URL}/images/Snake-plant.jpg' },
  { id: 2, name: 'Succulent', price: 15, category: 'Succulents', img: '${process.env.PUBLIC_URL}/images/Succulent.jpg' },
  // Add more products here
];

function ProductListing() {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
