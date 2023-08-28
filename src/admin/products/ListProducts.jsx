import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://average-bathing-suit-foal.cyclic.cloud/products/list"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);
  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product._id === productId);

    if (productToEdit) {
      const token = localStorage.getItem("token");

      navigate(`/dashboard/edit-product/${productId}`, {
        state: { token },
      });
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://average-bathing-suit-foal.cyclic.cloud/products/delete/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setProducts(products.filter((product) => product._id !== productId));
      } else if (response.status === 404) {
        setError("Product not found");
      } else {
        setError("An error occurred while deleting the product");
      }
    } catch (error) {
      setError("An error occurred while deleting the product");
    }
  };

  return (
    <section
      id="products-list"
      className="bg-white h-screen dark:bg-gray-900 flex flex-col justify-center items-center"
    >
      <div className="flex justify-end w-3/5 mt-4">
        <Link to="/dashboard/add-product">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Product
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto w-3/5 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>

              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-32 p-4">
                  <img src={product.imageUrl} alt={product.title} />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.title}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${product.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditProduct(product._id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {error && (
        <p className="text-black dark:text-white">
          Error fetching products: {error}
        </p>
      )}
    </section>
  );
};

export default ListProducts;
