import React from "react";
import { Outlet } from "react-router-dom";
import NavbarHome from ".././NavbarHome"; 

const Layout = () => {
  return (
    <>
      <NavbarHome />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;