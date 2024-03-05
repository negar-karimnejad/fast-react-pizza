import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { routes } from "./routes";
import CartOverview from "./components/CartOverview";

export default function App() {
  const router = useRoutes(routes);
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        {router}
      </div>
      <CartOverview />
    </div>
  );
}
