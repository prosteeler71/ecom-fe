import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://average-bathing-suit-foal.cyclic.cloud/products/list", {})
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="text-black dark:text-gray-400 dark:bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const { _id, title, price, imageUrl, category } = product;

  return (
    <div id="products" className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link to={`/product/${_id}`}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={imageUrl}
          />
        </a>
      </Link>
      <div className="mt-4">
        <h3 className="dark:text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="dark:text-white title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Products;
