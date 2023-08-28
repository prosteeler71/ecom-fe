import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/cartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shipping = 5;

  const handlePlaceOrder = async () => {
    try {
      const productTitles = cartItems.map((item) => item.title);
      const orderData = {
        products: productTitles,
        name,
        phoneNumber,
        address,
        email,
        amount: subtotal + shipping,
      };

      const response = await fetch(
        "https://average-bathing-suit-foal.cyclic.cloud/orders/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (response.ok) {
        navigate("/order-success");
      } else {
        // Handle error scenario
        console.error("Error placing order.");
      }
    } catch (error) {
      console.error("An error occurred while processing the request.", error);
    }
  };

  return (
    <section className="bg-white h-auto py-40 dark:bg-gray-900 flex flex-col justify-center items-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-600 md:text-5xl lg:text-6xl ">
        Checkout...
      </h1>
      <form className="w-6/12">
        <div className="mb-6">
          <label
            htmlFor="Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Phone Number:"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number:
          </label>
          <input
            type="text"
            placeholder="Phone Number:"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Address:"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address:
          </label>
          <input
            type="text"
            placeholder="Address:"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Email:"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email:
          </label>
          <input
            type="text"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </form>

      <div className="mt-6 h-full rounded-lg border bg-blue-600 dark:bg-white p-6 shadow-md md:w-3/12">
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
        <div>
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Check out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
