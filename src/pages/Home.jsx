import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome Home</h1>
      <p>Start shopping and add items directly to your cart.</p>
function Home(){

return(
<div>

<h1>Welcome Home</h1>

<Link to="/login">
Go to Login Page
</Link>

</div>
)

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Link to="/products">Browse Products</Link>
        <Link to="/cart">View Cart</Link>
        <Link to="/login">Go to Login</Link>
      </div>
    </div>
  );
}

export default Home;