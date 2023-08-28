import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ListProducts from "./products/ListProducts";
import Users from "./Users/Users";
import Orders from "./orders/Orders";
import ContactList from "./Messages/Messages";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const isAuthenticated = token ? true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login"); //
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Sidebar />
      <ListProducts />
      <Users />
      <Orders />
      <ContactList />
    </div>
  );
};

export default Dashboard;
