import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <>
      <header className="bg-base-100 shadow-sm roboto-font px-2 md:px-0">
        <Navbar></Navbar>
      </header>
      <main className="mt-10 px-2 md:px-0">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
