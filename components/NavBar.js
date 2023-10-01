import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCartFromLocalStorage } from "../redux/cartSlice";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Check local storage for cart data, only run once on initial load
  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart");
    if (localStorageCart) {
      const parsedCart = JSON.parse(localStorageCart);
      dispatch(initializeCartFromLocalStorage(parsedCart));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1 className="navbar-brand">D's Vintage T's</h1>
        </Link>

        <div className="mx-auto">
          <Link href="/products" style={{ textDecoration: "none" }}>
            <span className="nav-link" style={{ textDecoration: "none" }}>
              Products
            </span>
          </Link>
        </div>

        <Link href="/cart" style={{ textDecoration: "none" }}>
          <span className="nav-link">
            <i className="bi bi-cart"></i> Cart{" "}
            {cartItems.length > 0 && (
              <span className="badge bg-primary">{cartItems.length}</span>
            )}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
