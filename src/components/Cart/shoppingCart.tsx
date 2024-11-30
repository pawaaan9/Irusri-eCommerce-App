import React, { useState, useEffect } from "react";
import Header from "../Layout/header";
import Footer from "../Layout/footer";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    setCartItems(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">Your Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          ) : (
            <div className="space-y-6 w-full">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex items-center space-x-4"
                >
               
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />

                  <p className="flex-1 text-gray-700 font-semibold">{item.name}</p>

                  <p className="flex-1 text-gray-600 text-center">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center space-x-2 text-center">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400 transition"
                    >
                      -
                    </button>
                    <span className="text-gray-700 font-bold">{item.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400 transition"
                    >
                      +
                    </button>
                  </div>

                  <p className="flex-1 text-gray-800 text-center font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-[#FB7185] text-white py-2 px-4 rounded-md transition"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">Total:</h2>
                <p className="text-xl font-bold text-gray-800">${calculateTotal().toFixed(2)}</p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <Link
              to="/products"
              className="bg-[#14B8A6] text-white py-2 px-4 rounded-md hover:bg-[#13a396] transition"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShoppingCart;
