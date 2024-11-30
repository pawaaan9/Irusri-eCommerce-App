import React, { useState, useEffect } from "react";
import Header from "../Layout/header";
import Footer from "../Layout/footer";
import { useNavigate } from "react-router-dom";
import iphone16promax from "../../assets/products/16-Pro-Max.webp";
import iphone16pro from "../../assets/products/16-Pro.webp";
import iphone16plus from "../../assets/products/iphone-16-Plus.webp";
import iphone16 from "../../assets/products/iphone-16.webp";
import iphone15promax from "../../assets/products/iPhone-15-Pro-Max.webp";
import iphone15plus from "../../assets/products/iPhone-15-Plus.webp";
import iphone15 from "../../assets/products/iPhone-15.webp";
import iphone12 from "../../assets/products/iphone-12.webp";
import iphone14 from "../../assets/products/iPhone-14.webp";
import iphone11 from "../../assets/products/iPhone-11.webp";

const Products = () => {
  const [cartItems, setCartItems] = useState<any[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const products = [
    {
      id: 1,
      name: "Iphone 16 Pro Max",
      price: "$1000",
      image: iphone16promax,
      description: "The latest iPhone with advanced features.",
    },
    {
      id: 2,
      name: "Iphone 16 Pro",
      price: "$900",
      image: iphone16pro,
      description: "A powerful iPhone with a sleek design.",
    },
    {
      id: 3,
      name: "Iphone 16 Plus",
      price: "$800",
      image: iphone16plus,
      description: "A larger iPhone with enhanced capabilities.",
    },
    {
      id: 4,
      name: "Iphone 16",
      price: "$750",
      image: iphone16,
      description: "The standard iPhone 16 with great performance.",
    },
    {
      id: 5,
      name: "Iphone 15 Pro Max",
      price: "$750",
      image: iphone15promax,
      description: "The previous generation Pro Max model.",
    },
    {
      id: 6,
      name: "Iphone 15 Plus",
      price: "$750",
      image: iphone15plus,
      description: "The previous generation Plus model.",
    },
    {
      id: 7,
      name: "Iphone 15",
      price: "$750",
      image: iphone15,
      description: "The previous generation standard model.",
    },
    {
      id: 8,
      name: "Iphone 14",
      price: "$750",
      image: iphone14,
      description: "A reliable iPhone with essential features.",
    },
    {
      id: 9,
      name: "Iphone 12",
      price: "$750",
      image: iphone12,
      description: "An older model with solid performance.",
    },
    {
      id: 10,
      name: "Iphone 11",
      price: "$750",
      image: iphone11,
      description: "A budget-friendly iPhone with good features.",
    },
  ];

  const navigate = useNavigate();

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: string;
    image: string;
  }) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.some((item) => item.id === product.id)
        ? prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevItems, { ...product, quantity: 1 }];

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleGoToCart = () => {
    navigate("/cart"); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">
            Our Products
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition flex"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-cover rounded-md mb-4"
                />
                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {product.name}
                    </h2>
                    <p className="text-gray-600">{product.price}</p>
                    <p className="text-gray-500">{product.description}</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-3 bg-[#14B8A6] text-white py-1 px-2 text-sm rounded-md hover:bg-[#13a396] transition w-32"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;