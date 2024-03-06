/* eslint-disable react/prop-types */
import { useState } from 'react';
import { formatCurrency } from '../utilities/formatCurrency';
import Button from './Button';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from '../feature/cart/cartSlice';

function MenuItem({ pizza }) {
  const [add, setAdd] = useState(false);
  const [menuQuantity, setMenuQuantity] = useState(1);
  const dispatch = useDispatch();

  const { id, imageUrl, soldOut, name, ingredients, unitPrice } = pizza;
  const handleClick = () => {
    setAdd(true);

    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addToCart(newItem));
  };

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
      {!add && !soldOut && <Button onClick={handleClick}>add to cart</Button>}
      {add && (
        <div className="flex items-center gap-2">
          <Button
            varient="circle"
            onClick={() => {
              dispatch(decrementQuantity(id));
              setMenuQuantity((prev) => prev - 1);
            }}
          >
            -
          </Button>
          <p>{menuQuantity}</p>
          <Button
            varient="circle"
            onClick={() => {
              dispatch(incrementQuantity(id));
              setMenuQuantity((prev) => prev + 1);
            }}
          >
            +
          </Button>

          <Button onClick={() => setAdd(false)}>delete</Button>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
