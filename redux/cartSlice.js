import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    initializeCartFromLocalStorage: (state, action) => {
      state.items = action.payload.items;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);

      //Update local storage on client rendering
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state)); // Update local storage
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      // only remove first occurrence of item
      const indexToRemove = state.items.find(
        (item) => item.id === itemIdToRemove
      );
      state.items.splice(indexToRemove, 1);

      //Update local storage for CSR
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state)); // Update local storage
      }
    },
  },
});

export const { addToCart, removeFromCart, initializeCartFromLocalStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
