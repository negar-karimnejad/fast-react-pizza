import { createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import CreateOrder from "./pages/CreateOrder";
import Homepage from "./pages/Homepage";
import Menu, { loader as menuLoader } from "./pages/Menu";
import Order from "./pages/Order";

export const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/menu", element: <Menu />, loader: menuLoader },
  { path: "/cart", element: <Cart /> },
  { path: "/order/new", element: <CreateOrder /> },
  { path: "/order/:orderId", element: <Order /> },
]);
