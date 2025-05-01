import React from "react";
import { useParams, NavLink, Outlet } from "react-router";

const Products = () => {
  let params = useParams();
  return (
    <div>
      <div className=" w-screen h-100 flex flex-col text-5xl gap-2 justify-evenly items-center text-rose-300">
        <NavLink to="/products/1">
          <span>Product 1</span>
        </NavLink>
        <NavLink to="/products/2">
          <span>Product 2</span>
        </NavLink>
        <NavLink to="/products/3">
          <span>Product 3</span>
        </NavLink>
      </div>

      <Outlet />

      <h1
        className="text-4xl text-fuchsia-400 h-50 mt-10 w-screen
      flex justify-center items-center"
      >
        This is Product Page {params.productId}
      </h1>
    </div>
  );
};

export default Products;
