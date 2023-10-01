import { useQuery } from "react-query";
import { fetchAllProducts } from "../../lib/shopify-service";
import Link from "next/link";
import Image from "next/image";

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
                <div style={{ maxHeight: "520px" }}>
                  <Image
                    src={product.image ? product.image.src : ""}
                    alt={product.title}
                    width={400}
                    height={400}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      maxHeight: "400px",
                    }}
                  />
                </div>

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
