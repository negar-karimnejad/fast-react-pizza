import { RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import CartOverview from "./components/CartOverview";
import Navbar from "./components/Navbar";
import { router } from "./routes";

export default function App() {
  return (
    <RouterProvider router={router}/>
    //   <AppLayout>
    //     <>
    //       <Navbar />
    //       {router}
    //     </>
    //     <CartOverview />
    //   </AppLayout>
    // </RouterProvider>
  );
}
