import { Outlet, useNavigation } from "react-router";
import Navbar from "./Navbar";
import CartOverview from "./CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();

  return (
    <div className="w-full h-screen flex flex-col justify-between">
      {state === "loading" && <Loader />}
      <>
        <Navbar />
        {state === "idle" && <Outlet />}
      </>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
