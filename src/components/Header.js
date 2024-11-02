// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header>
      <h1>Houseplant Store</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;
