import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="max-w-3xl mx-auto">
      <Link to={"/menu"} className="text-blue-500">
        ← Back to menu
      </Link>
      <h2 className="mt-8 font-medium text-gray-700 text-2xl">Your cart, X</h2>
      <div className="border-b-2 py-8 flex items-center justify-between">
        <p>1× Romana</p>
        <div className="flex items-center gap-8">
          <p className="font-bold text-gray-800">€15.00</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="font-medium text-sm text-gray-800 bg-yellow-400 rounded-full w-8 h-8 uppercase transition-all hover:bg-yellow-300"
            >
              -
            </button>
            <p>1</p>
            <button
              type="button"
              className="font-medium text-sm text-gray-800 bg-yellow-400 rounded-full w-8 h-8 uppercase transition-all hover:bg-yellow-300"
            >
              +
            </button>
            <button
              type="button"
              className="font-medium text-sm text-gray-800 bg-yellow-400 rounded-full px-4 py-1.5 uppercase transition-all hover:bg-yellow-300"
            >
              delete
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-2">
        <button
          type="button"
          className="font-semibold text-gray-800 bg-yellow-400 rounded-full px-4 py-3 transition-all hover:bg-yellow-300"
        >
          ORDER PIZZAS
        </button>
        <button
          type="button"
          className="font-semibold border-2 border-gray-300 text-gray-500 bg-transparent rounded-full px-4 py-3 transition-all hover:bg-gray-300 hover:text-gray-800"
        >
          CLEAR CART
        </button>
      </div>
    </div>
  );
}

export default Cart;
