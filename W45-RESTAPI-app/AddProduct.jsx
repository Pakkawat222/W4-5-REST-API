import { useState } from "react";

function AddProduct({ apiUrl, onProductAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price) };

    const response = await fetch(apiUrl + "/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      setName("");
      setPrice("");
      onProductAdded(); // รีเฟรชรายการสินค้า
    } else {
      console.error("Error adding product");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>เพิ่มสินค้าใหม่</h2>
      <input type="text" placeholder="ชื่อสินค้า" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="ราคา" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">เพิ่มสินค้า</button>
    </form>
  );
}

export default AddProduct;