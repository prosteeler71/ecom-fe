import React, { useState, useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://average-bathing-suit-foal.cyclic.cloud/contact/messages"
      );
      const data = await response.json();
      setContacts(data.contacts);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    }
  };

  return (
    <section
      id="messages"
      className="bg-white h-screen dark:bg-gray-900 flex flex-col justify-center items-center"
    >
      <div className="relative overflow-x-auto w-3/5 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>

              <th scope="col" className="px-6 py-3">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {contact.email}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {contact.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ContactList;
