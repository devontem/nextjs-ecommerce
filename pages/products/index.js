import { useQuery } from "react-query";
import { fetchAllProducts } from "../../lib/shopify-service";
import Link from "next/link";

function ProductListing() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", fetchAllProducts);

  if (isLoading || isError) {
    return (
      <div className="container">
        <div className="row">
          {isLoading && (
            <div className="spinner-grow text-primary mx-auto" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {isError && <p>Error fetching products.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Link
              href={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <img
                  src={product.image ? product.image.src : ""}
                  alt={product.title}
                  className="card-img-top"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
