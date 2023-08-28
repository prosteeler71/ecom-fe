import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cartItems, addToCart, removeFromCart } = cartContext;
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div className="min-h-screen h-auto pb-40 bg-white dark:bg-gray-900 pt-20">
      <h1 className="mb-10 text-center text-2xl text-white font-bold">
        Cart Items
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 xl:px-0">
        {cartItems.length ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="mb-6 rounded-lg bg-blue-600 dark:bg-white p-6 shadow-md"
            >
              <div className="flex justify-between">
                <img
                  src={item.imageUrl}
                  alt="product-image"
                  className="w-16 h-16 rounded-lg"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold text-white dark:text-gray-700">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-white dark:text-gray-700">
                    36EU - 4US
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-white dark:text-gray-700">
                    ${item.price}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-white dark:text-gray-700 cursor-pointer duration-150 hover:text-red-500"
                    onClick={() => removeFromCart(item.title)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">Cart Is Empty.</p>
        )}

        <div className="mt-6 h-full rounded-lg border bg-blue-600 dark:bg-white p-6 shadow-md md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-white dark:text-gray-700">Subtotal</p>
            <p className="text-white dark:text-gray-700">
              ${subtotal.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-white dark:text-gray-700">Shipping</p>
            <p className="text-white dark:text-gray-700">$5.00</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold text-white dark:text-gray-700">
              Total
            </p>
            <div className="">
              <p className="mb-1  text-white dark:text-gray-700 text-lg font-bold">
                ${(subtotal + 5).toFixed(2)} USD
              </p>
              <p className="text-sm text-white dark:text-gray-700">
                including VAT
              </p>
            </div>
          </div>
          <Link to="/checkout">
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
