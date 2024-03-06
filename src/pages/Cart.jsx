import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  const [isEmpty] = useState(false);

  return (
    <div className="mx-auto max-w-3xl p-5">
      <Link to={'/menu'} className="text-blue-500">
        ← Back to menu
      </Link>
      {isEmpty ? (
        <p className="mt-8 font-bold text-gray-700">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      ) : (
        <>
          <h2 className="mt-8 text-2xl font-bold text-gray-800">
            Your cart, X
          </h2>
          <div className="flex flex-col justify-between gap-y-3 border-b-2 py-8 sm:flex-row sm:items-center">
            <p>1× Romana</p>
            <div className="flex items-center gap-8">
              <p className="font-bold text-gray-800">€15.00</p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="h-8 w-8 rounded-full bg-yellow-400 text-sm font-medium uppercase text-gray-800 transition-all hover:bg-yellow-300"
                >
                  -
                </button>
                <p>1</p>
                <button
                  type="button"
                  className="h-8 w-8 rounded-full bg-yellow-400 text-sm font-medium uppercase text-gray-800 transition-all hover:bg-yellow-300"
                >
                  +
                </button>
                <button
                  type="button"
                  className="rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-medium uppercase text-gray-800 transition-all hover:bg-yellow-300"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-2">
            <button
              type="button"
              onClick={() => navigate('/order/new')}
              className="rounded-full bg-yellow-400 px-4 py-3 font-semibold text-gray-800 transition-all hover:bg-yellow-300"
            >
              ORDER PIZZAS
            </button>
            <button
              type="button"
              className="rounded-full border-2 border-gray-300 bg-transparent px-4 py-3 font-semibold text-gray-500 transition-all hover:bg-gray-300 hover:text-gray-800"
            >
              CLEAR CART
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
