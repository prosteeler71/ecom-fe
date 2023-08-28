import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const handlelogout = () => {
  localStorage.removeItem("token");
};

const Sidebar = () => {
  return (
    <>
      <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer">
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div
        className="sidebar fixed top-20 bottom-20 lg:left-0 left-[-300px] duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-white dark:bg-gray-900 "
      >
        <div className="text-black dark:text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i>
            <h1 className="text-[15px]  ml-3 text-xl text-slate-900 dark:text-gray-200 font-bold">
              ecomReact
            </h1>
            <i className="bi bi-x ml-20 cursor-pointer lg:hidden"></i>
          </div>
          <hr className="my-2 text-black dark:text-gray-600" />

          <div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer   hover:bg-blue-600">
              <i className="bi bi-house-door-fill"></i>
              <Link
                to="/"
                className="text-[15px] ml-4 hover:text-white text-black dark:text-gray-200"
              >
                Return to Store
              </Link>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer   hover:bg-blue-600">
              <i className="bi bi-bookmark-fill"></i>
              <HashLink
                to="#products-list"
                className="text-[15px] ml-4 hover:text-white text-black dark:text-gray-200"
              >
                Products
              </HashLink>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer   hover:bg-blue-600">
              <i className="bi bi-bookmark-fill"></i>
              <HashLink
                to="#users-list"
                className="text-[15px] ml-4 hover:text-white text-black dark:text-gray-200"
              >
                Users
              </HashLink>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer   hover:bg-blue-600">
              <i className="bi bi-bookmark-fill"></i>
              <HashLink
                to="#orders"
                className="text-[15px] ml-4 hover:text-white text-black dark:text-gray-200"
              >
                Orders
              </HashLink>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer   hover:bg-blue-600">
              <i className="bi bi-bookmark-fill"></i>
              <HashLink
                to="#messages"
                className="text-[15px] ml-4 hover:text-white text-black dark:text-gray-200"
              >
                Messages
              </HashLink>
            </div>

            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer   hover:bg-blue-600">
              <i className="bi bi-bookmark-fill"></i>
              <HashLink
                onClick={handlelogout}
                className="text-[15px] ml-4 hover:text-white text-black dark:text-gray-200"
              >
                Logout
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
