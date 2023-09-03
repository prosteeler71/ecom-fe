import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const authToken = localStorage.getItem("token"); // Retrieve token from localStorage
      if (!authToken) {
        // Handle missing authToken
        return;
      }

      const response = await fetch(
        "https://average-bathing-suit-foal.cyclic.cloud/users/list",
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Send token in the header
          },
        }
      );

      const data = await response.json();
      if (response.status === 200) {
        setUsers(data);
      } else {
        setError("An error occurred while fetching users");
      }
    } catch (error) {
      setError("An error occurred while fetching users");
    }
  };

 const deleteUser = async (userId) => {
    try {
      const authToken = localStorage.getItem("token");
      if (!authToken) {
        console.error("Missing authToken");
        return;
      }

      const response = await fetch(
        `https://average-bathing-suit-foal.cyclic.cloud/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken.trim()}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("User deleted successfully");

        fetchUsers();
      } else {
        const data = await response.json();
        console.error(
          data.message || "An error occurred while deleting the user"
        );
      }
    } catch (error) {
      console.error("An error occurred while deleting the user:", error);
    }
  };

  return (
    <section
      id="users-list"
      className="bg-white h-screen  dark:bg-gray-900 flex flex-col justify-center items-center"
    >
      <div className="flex justify-end w-1/2 mt-4">
        <Link to="/dashboard/register">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Users
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-6/12">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.userName}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => deleteUser(user._id)} // Assuming deleteUser is defined
                    className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
