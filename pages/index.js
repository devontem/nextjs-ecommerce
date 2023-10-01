import Link from "next/link";
import Image from "next/image";

function HomePage() {
  return (
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <Image
          src="/images/hero-image.webp"
          alt="Two people wearing Tshirts"
          className="img-fluid mb-4"
          width={1500}
          height={1000}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            maxHeight: "400px",
          }}
        />
        <h1>Embrace Sustainable Fashion</h1>
        <p>Home of the most authentic and nostalgic vintage t-shirts.</p>
        <Link href="/products" className="btn btn-primary btn-lg">
          Shop Products
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
