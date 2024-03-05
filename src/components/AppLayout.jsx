import { Outlet } from "react-router";
import Navbar from "./Navbar";
import CartOverview from "./CartOverview";

function AppLayout() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <>
        <Navbar />
        <Outlet />
      </>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
