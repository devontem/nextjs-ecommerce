import Navbar from "./NavBar";

function Layout({ children }) {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
