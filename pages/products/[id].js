import { useQuery } from "react-query";
import { fetchProductById } from "../../lib/shopify-service";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["product", id], () => fetchProductById(id));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    // Display end user validation
    toast.success("Item added from the cart", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  if (isLoading || isError) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {isLoading && (
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {isError && <p>Error fetching products.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <Image
              src={product.image ? product.image.src : ""}
              alt={product.title}
              width={300}
              height={400}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                maxHeight: "400px",
              }}
            />
          </div>
        </div>
        <div className="col-md-4">
          <h2 class="mt-3">{product.title}</h2>
          <p className="lead">${product.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default ProductDetail;
