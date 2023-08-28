import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the data to send to the server
    const formData = {
      email: email,
      message: message,
    };

    try {
      const response = await fetch(
        "https://average-bathing-suit-foal.cyclic.cloud/contact/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Feedback submitted successfully");
      } else {
        const data = await response.json();
        console.error(
          data.message || "An error occurred while submitting feedback"
        );
      }
    } catch (error) {
      console.error("An error occurred while sending the feedback", error);
    }
  };

  return (
    <section id="contact-us" className="bg-white dark:bg-gray-900 ">
      <div className="flex justify-center items-center ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4 py-10">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full bg-white dark:bg-gray-900 dark:text-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 pb-10">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600 dark:text-white "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  className="w-full bg-white dark:bg-gray-900 dark:text-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg w-auto "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
