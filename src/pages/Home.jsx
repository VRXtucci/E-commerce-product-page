import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";

const Home = () => {
  const [cart, setCart] = useState(null);

  const addToCart = (quantity) => {
    if (quantity === 0) return;

    const product = {
      title: "Fall Limited Edition Sneakers",
      price: 125,
      quantity: quantity,
      image: "/src/assets/images/image-product-1-thumbnail.jpg",
    };

    setCart(product);
  };

  const removeFromCart = () => setCart(null);

  return (
    <>
      <Navbar cart={cart} onRemove={removeFromCart} />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
        {" "}
        <ProductGallery />
        <ProductInfo addToCart={addToCart} />
      </main>
    </>
  );
};

export default Home;
