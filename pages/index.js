import Link from "next/link";

function HomePage() {
  return (
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <img
          src="/images/hero-image.webp"
          alt="Two people wearing Tshirts"
          className="img-fluid mb-4"
          style={{ maxWidth: "500px" }}
        />
        <h1>Embrace Sustainable Fashion</h1>
        <p>Home of the most authentic and nostalgic vintage t-shirts.</p>
        <a href="/products" className="btn btn-primary btn-lg">
          Shop Products
        </a>
      </div>
    </section>
  );
}

export default HomePage;
