import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import { useProductContext } from "../context/productcontext";

const cookies = new Cookies();
const AdminPage = () => {
  const navigate = useNavigate();

  const { getProducts } = useProductContext();

  useEffect(() => {
    if (!cookies.get("token")) {
      toast.error("Please login as admin first!");
      navigate("/signin");
    }
    getProducts();
  }, []);
  return (
    <>
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>{" "}
    </>
  );
};

export default AdminPage;
