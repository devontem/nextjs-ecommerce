import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    // Display end user validation
    toast.success("Item removed from the cart", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const handleCheckout = () => {
    toast.error("An error occurred. The app hasn't been fully built yet. 😅", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const total = cartItems.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="container mt-4">
      <div className="col-lg-8 mx-auto">
        <h2>Your Cart</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Product</th>
              <th className="text-center">Price</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="text-center">{item.title}</td>
                <td className="text-center">${item.price}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right">
          <h4>Total: ${total.toFixed(2)}</h4>
          <button className="btn btn-primary" onClick={() => handleCheckout()}>
            Checkout
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Cart;
