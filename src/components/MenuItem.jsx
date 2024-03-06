/* eslint-disable react/prop-types */
import { useState } from 'react';
import { formatCurrency } from '../utilities/formatCurrency';

function MenuItem({ pizza }) {
  const [add, setAdd] = useState(false);
  const { imageUrl, soldOut, name, ingredients, unitPrice } = pizza;

  return (
    <div className="flex items-end justify-between border-b-2 p-2">
      <div className="flex gap-5">
        <img
          src={imageUrl}
          alt=""
          className={`${soldOut ? 'opacity-50 grayscale' : ''} h-24 w-24`}
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-lg font-medium text-gray-700">{name}</p>
            <p className="italic text-gray-500">{ingredients.join(', ')}</p>
          </div>
          <p className={soldOut ? 'font-semibold text-gray-400' : ''}>
            {soldOut ? 'SOLD OUT' : formatCurrency(unitPrice)}{' '}
          </p>
        </div>
      </div>
      {!add && !soldOut && (
        <button
          type="button"
          onClick={() => setAdd(true)}
          className="min-w-fit rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-medium uppercase text-gray-800 transition-all hover:bg-yellow-300"
        >
          add to cart
        </button>
      )}
      {add && (
        <div className="flex items-center gap-2">
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
            onClick={() => setAdd(false)}
            className="rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-medium uppercase text-gray-800 transition-all hover:bg-yellow-300"
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
