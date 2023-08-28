import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 z-40 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link href="/" className="hover:underline">
          ecomReact
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <HashLink href="/#top" className="mr-4 hover:underline md:mr-6">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink to="/#products" className="mr-4 hover:underline md:mr-6">
            Products
          </HashLink>
        </li>
        <li>
          <Link to="/cart" className="mr-4 hover:underline md:mr-6">
            Cart
          </Link>
        </li>
        <li>
          <HashLink
            to="/admin/login/#products-list"
            className="hover:underline"
          >
            Login
          </HashLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
