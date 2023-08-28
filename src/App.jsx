import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./admin/Users/Login";
import Register from "./admin/Users/Register";
import Dashboard from "./admin/Dashboard";
import Cart from "./pages/Cart";
import AddProduct from "./admin/products/AddProduct";
import Edit from "./admin/products/Edit";
import Users from "./admin/Users/Users";
import Checkout from "./pages/Checkout";
import Ordered from "./pages/Ordered";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { CartContainer } from "./context/cartContext";

const App = () => {
  return (
    <div>
      <CartContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/dashboard/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/add-product" element={<AddProduct />} />
            <Route
              path="/dashboard/edit-product/:productId"
              element={<Edit />}
            />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<Ordered />} />
          </Routes>
          <Footer />
        </Router>
      </CartContainer>
    </div>
  );
};

export default App;
