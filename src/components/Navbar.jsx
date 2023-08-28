import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CartContext from "../context/cartContext";

const Navbar = () => {
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  const cartItemCount = cartItems.length;
  return (
    <>
      <nav className="bg-white sticky top-0 z-20 pt-2 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <HashLink to="/#top" className="flex items-center">
            <img
              src="https://www.svgrepo.com/show/484518/cart-basket-for-online-shops.svg"
              className="h-8 mr-3 shadow-lg "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ecomReact
            </span>
          </HashLink>
          <button
            id="dropdownMenuIconButton"
            data-dropdown-toggle="dropdownDots"
            className="inline-flex md:hidden  items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 4 15"
            >
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </button>

          <div
            id="dropdownDots"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconButton"
            >
              <li>
                <HashLink
                  to="#top"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Products
                </HashLink>
              </li>
              <li>
                <HashLink
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
            <div className="py-2">
              <button className="inline-flex items-center bg-transparent text-black border-0 dark:text-white pr-6  focus:outline-none hover:text-blue-600 rounded text-base mt-4 md:mt-0 relative">
                <Link to="/cart">
                  Cart
                  {cartItemCount > 0 && (
                    <span className="cart-badge absolute top-0 right-0 bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </button>
            </div>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <HashLink
                  to="/#top"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#products"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products
                </HashLink>
              </li>

              <li>
                <HashLink
                  to="#contact-us"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </HashLink>
              </li>

              <li>
                <button className="inline-flex items-center bg-transparent text-black border-0 dark:text-white pr-6  focus:outline-none hover:text-blue-600 rounded text-base mt-4 md:mt-0 relative">
                  <Link to="/cart">
                    Cart
                    {cartItemCount > 0 && (
                      <span className="cart-badge absolute top-0 right-0 bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
