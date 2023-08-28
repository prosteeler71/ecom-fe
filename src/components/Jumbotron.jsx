import React from "react";

const Jumbotron = () => {
  return (
    <section id="top" className="bg-white pt-20 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-600 md:text-5xl lg:text-6xl ">
          Shop the Latest Trends Online Now!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Discover a world of tech and style at our online store. Explore our
          curated collection of the latest trends and must-have essentials for a
          chic and effortless look.
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
