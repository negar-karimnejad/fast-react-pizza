/* eslint-disable react/prop-types */
import { useState } from 'react';
import { formatCurrency } from '../utilities/formatCurrency';
import Button from './Button';

function MenuItem({ pizza }) {
  const [add, setAdd] = useState(false);
  const { imageUrl, soldOut, name, ingredients, unitPrice } = pizza;

  return (
    <div className="flex items-end justify-between p-2">
      <div className="flex gap-5">
        <img
          src={imageUrl}
          alt=""
          className={`${soldOut ? 'opacity-70 grayscale' : ''} h-24 w-24`}
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-lg font-medium text-gray-700">{name}</p>
            <p className="italic text-stone-500">{ingredients.join(', ')}</p>
          </div>
          <p className={soldOut ? 'font-semibold text-stone-500' : ''}>
            {soldOut ? 'SOLD OUT' : formatCurrency(unitPrice)}{' '}
          </p>
        </div>
      </div>
      {!add && !soldOut && (
        <Button onClick={() => setAdd(true)}>add to cart</Button>
      )}
      {add && (
        <div className="flex items-center gap-2">
          <Button varient="circle">-</Button>
          <p>1</p>
          <Button varient="circle">+</Button>

          <Button onClick={() => setAdd(false)}>delete</Button>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
