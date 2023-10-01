import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {
  addToCart,
  removeFromCart,
  initializeCartFromLocalStorage,
} from "./../redux/cartSlice";

describe("cartSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
    });
  });

  it("should initialize the cart from local storage", () => {
    const initialState = { items: [] };
    const mockCartData = { items: [{ id: 1, name: "Product 1" }] };

    store.dispatch(
      initializeCartFromLocalStorage({ items: mockCartData.items })
    );

    const state = store.getState().cart;
    expect(state.items).toEqual(mockCartData.items);
  });

  it("should add an item to the cart", () => {
    const newItem = { id: 2, name: "Product 2" };
    store.dispatch(addToCart(newItem));

    const state = store.getState().cart;
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(newItem);
  });

  it("should remove an item from the cart", () => {
    const initialState = {
      items: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
      ],
    };
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: { cart: initialState },
    });

    const itemIdToRemove = 1;
    store.dispatch(removeFromCart(itemIdToRemove));

    const state = store.getState().cart;
    expect(state.items).toHaveLength(1);
    expect(state.items[0].id).not.toBe(itemIdToRemove);
  });
});
