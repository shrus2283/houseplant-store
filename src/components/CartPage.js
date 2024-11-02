// src/components/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../redux/cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
              <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button>Checkout (Coming Soon)</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
