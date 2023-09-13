import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import HintsModal from "../../components/Modals/HintsModal";

const MainlayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HintsModal />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainlayOut;
