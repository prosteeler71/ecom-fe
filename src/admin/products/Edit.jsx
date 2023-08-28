import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isAuthenticated = token ? true : false;

  const { productId } = useParams();

  const [productData, setProductData] = useState({
    title: "",
    price: "",
    quantity: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    console.log("Fetching product with productId:", productId); // Log the productId
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `https://average-bathing-suit-foal.cyclic.cloud/products/${productId}`
        );

        if (response.ok) {
          const data = await response.json();
          setProductData(data);
        } else {
          console.error("Failed to fetch product data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Product Data before API request:", productData);
    try {
      const response = await fetch(
        `https://average-bathing-suit-foal.cyclic.cloud/products/edit/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(productData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/dashboard");
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-white h-screen dark:bg-gray-900 flex flex-col justify-center items-center">
      <form className="w-6/12" onSubmit={handleFormSubmit}>
        {Object.keys(productData).length > 0 ? (
          <>
            <div className="mb-6">
              <label
                htmlFor="ProductName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                id="ProductName"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Product Name"
                value={productData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="ProductPrice"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Price
              </label>
              <input
                type="number"
                id="ProductPrice"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Price"
                value={productData.price}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="ProductQuantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Quantity
              </label>
              <input
                type="number"
                id="ProductQuantity"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Quantity"
                value={productData.quantity}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="Description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Product Description
              </label>
              <textarea
                id="Description"
                rows="4"
                className="block w-full px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Product Description..."
                value={productData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                htmlFor="ProductImage"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Image
              </label>
              <input
                type="text"
                id="ProductImage"
                name="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Image URL"
                value={productData.imageUrl}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
          </>
        ) : (
          <p className="text-black dark:text-white">Loading...</p>
        )}
      </form>
    </section>
  );
};

export default EditProduct;
