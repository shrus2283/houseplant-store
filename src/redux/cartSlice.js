// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalItems += 1;
        state.totalPrice += action.payload.price;
      }
    },
    incrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },
    decrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
