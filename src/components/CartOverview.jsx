import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 py-3 [&>*]:bg-transparent px-5 text-gray-200">
      <div className="flex items-center font-medium gap-5 [&>*]:bg-transparent">
        <p>1 PIZZAS</p>
        <p>€15.00</p>
      </div>
      <Link to={"/cart"} className="uppercase">
        OPEN CART →
      </Link>
    </div>
  );
}

export default CartOverview;
