import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Cart from "../pages/cart";

const mockStore = configureStore([]);

describe("Cart component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [
          { id: 1, title: "Product 1", price: 10.0 },
          { id: 2, title: "Product 2", price: 15.0 },
        ],
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
  });

  it("displays a total and handles checkout", async () => {
    await waitFor(() => {
      expect(screen.getByText("Total: $25.00")).toBeInTheDocument();
      expect(screen.getByText("Checkout")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Checkout"));
  });
});
