/* eslint-disable react/prop-types */
import { useState } from "react";

function MenuItem({ pizza }) {
  const [add, setAdd] = useState(false);
  const [soldout] = useState(false);
  console.log("pizza=>", pizza);
  
  return (
    <div className="flex justify-between items-end border-b-2 p-2">
      <div className="flex gap-5">
        <img
          src="https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg"
          alt=""
          className={`${soldout ? "grayscale opacity-50" : ""} w-24 h-24`}
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-medium text-gray-700 text-lg">Margherita</p>
            <p className="italic text-gray-500">Tomato, Mozzarella, Basil</p>
          </div>
          <p className={soldout ? "font-semibold text-gray-400" : ""}>
            {soldout ? "SOLD OUT" : "€12.00"}{" "}
          </p>
        </div>
      </div>
      {!add && !soldout && (
        <button
          type="button"
          onClick={() => setAdd(true)}
          className="font-medium text-sm text-gray-800 bg-yellow-400 rounded-full px-4 py-1.5 uppercase transition-all hover:bg-yellow-300"
        >
          add to cart
        </button>
      )}
      {add && (
        <div className="flex items-center gap-2">
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
            onClick={() => setAdd(false)}
            className="font-medium text-sm text-gray-800 bg-yellow-400 rounded-full px-4 py-1.5 uppercase transition-all hover:bg-yellow-300"
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
