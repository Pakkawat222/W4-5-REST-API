import ProductList from "./ProductList";
import { useState } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

function App() {
  const [refresh, setRefresh] = useState(false);
  const apiUrl = "http://localhost:5000";

  return (
    <div>
      <h1>ร้านค้าสินค้าออนไลน์</h1>
      <AddProduct apiUrl={apiUrl} onProductAdded={() => setRefresh(!refresh)} />
      <ProductList apiUrl={apiUrl} key={refresh} />
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>ร้านค้าสินค้าออนไลน์</h1>
      <ProductList apiUrl="http://localhost:5173" />
    </div>
  );
}

export default App;