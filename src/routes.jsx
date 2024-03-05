import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";

export const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/menu", element: <Menu /> },
  { path: "/cart", element: <Cart /> },
];
