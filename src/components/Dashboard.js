import { useEffect } from "react";
import { useProductContext } from "../context/productcontext";
import { useUserContext } from "../context/user_context";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";

const Dashboard = () => {
  const { products, getProducts } = useProductContext();
  const { users, getAllUsers } = useUserContext();
  var total_users = users.length;

  var total_products = products.length;

  useEffect(() => {
    getProducts("http://localhost:8080/product/");
    getAllUsers();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width:"60px",

    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width:"180px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      width:"150px",

    },
    {
      name: "Category ID",
      selector: (row) => row.categoryId,
      width:"100px",
      center:"true",
    },

  ];

  const columns2 = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width:"60px",
    },
    {
      name: "FName",
      selector: (row) => row.firstName,
      sortable: true,
      width:"120px",

    },
    {
      name: "LName",
      selector: (row) => row.lastName,
      sortable: true,
      width:"120px",

    },
    {
      name: "Email",
      selector: (row) => row.email,
      allowOverflow: true,
    },
    
  ];
  console.log(users);

  return (
    <div className="col main mt-1 ms-5" style={{ fontSize: "10px" }}>
    <div className="row mb-3">
      <div className="col-xl-3 col-sm-6 my-5">
    <NavLink to="/products" style={{ color:"white" }}>

        <div className="card text-white bg-danger h-100">
          <div className="card-body bg-danger">
            <div className="rotate" style={{display:"flex"}}>
              <i className="fa fa-list fa-4x"></i>
            <h1 className="display-4" style={{marginLeft:"10px", marginTop:"-4px", fontSize:"40px", color:"white"}}>{total_products}</h1>

            </div>
            <h6 className="text-uppercase">Products</h6>
          </div>
        </div>
        </NavLink>
      </div>
      

      <div className="col-xl-3 col-sm-6 my-5">
        <div className="card bg-success text-white h-100">
          <div
            className="card-body bg-success"
            style={{ backgroundColor: "#57b960" }}
          >
            <div className="rotate" style={{display:"flex"}}>
              <i className="fa fa-user fa-4x"></i>
              <h1 className="display-4" style={{marginLeft:"10px", marginTop:"-4px", fontSize:"40px", color:"white"}}>{total_users}</h1>
            </div>
            <h6 className="text-uppercase">Users</h6>
          </div>
        </div>
      </div>
      
    </div>
      <hr />

      
      

      <div className="row">
        <div className="col">
          <div className="col-lg-10 col-md-6 col-sm-12 mb-10">
            <h2 className="mt-3 mb-3 text-primary">
              List of All Products Available
            </h2>
            <DataTable pagination columns={columns} data={products} />
          </div>
        </div>
        <div className="col">
          <div className="col-lg-10 col-md-6 col-sm-12">
            <h2 className="mt-3 mb-3 text-primary">List of All Users Available</h2>
            <DataTable pagination columns={columns2} data={users} width="20px"/>
          </div>
        </div>
        </div>
        </div>
    
    
    
  );
};

export default Dashboard;
