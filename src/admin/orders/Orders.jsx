import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const { _id } = useParams();

  useEffect(() => {
    fetchOrders();
  }, []);

  // const handleDelete = async (orderId) => {
  //   try {
  //     const response = await fetch(
  //       `https://average-bathing-suit-foal.cyclic.cloud/orders/delete/${orderId}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Order shipped successfully");
  //     } else {
  //       const data = await response.json();
  //       console.error(
  //         data.message || "An error occurred while shipping the order"
  //       );
  //     }
  //   } catch (error) {
  //     console.error(
  //       "An error occurred while sending the ship order request",
  //       error
  //     );
  //   }
  // };

  const handleShipOrder = async (orderId) => {
    try {
      const response = await fetch(
        `https://average-bathing-suit-foal.cyclic.cloud/orders/${orderId}/edit`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ status: "Shipped" }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Order shipped successfully", data);

        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: "Shipped" } : order
          )
        );
      } else {
        const errorText = await response.json();
        console.error("Error response:", errorText);
      }
    } catch (error) {
      console.error(
        "An error occurred while sending the ship order request",
        error
      );
    }
  };

  const fetchOrders = async () => {
    const authToken = localStorage.getItem("token");

    try {
      const response = await fetch(
        "https://average-bathing-suit-foal.cyclic.cloud/orders/list",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 401) {
        setError("Unauthorized. Please check your authentication token.");
        return;
      }

      if (!response.ok) {
        setError("An error occurred while fetching orders.");
        return;
      }

      const data = await response.json();
      setOrders(data.orders);
    } catch (error) {
      setError("An error occurred while fetching orders.");
    }
  };

  return (
    <>
      <section
        id="orders"
        className="bg-white h-screen dark:bg-gray-900 flex flex-col justify-center items-center"
      >
        <div className="relative overflow-x-auto w-3/5 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order ID
                </th>

                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Shipped
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Delete
                </th> */}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {order._id}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${order.amount}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {order.paymentMethod}
                  </td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      {order.status}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="font-medium text-yellow-500 dark:text-yellow-500 hover:underline"
                      onClick={() => handleShipOrder(order._id)}
                    >
                      Ship Order
                    </button>
                  </td>
                  {/* <td className="px-6 py-4">
                    <button
                      className="font-medium text-red-500 dark:text-red-500 hover:underline"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete Order
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Orders;
