/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  getCurrentQuantityById,
  incrementQuantity,
} from '../feature/cart/cartSlice';
import { formatCurrency } from '../utilities/formatCurrency';
import Button from './Button';
import DeleteButton from './DeleteButton';

function MenuItem({ pizza }) {
  const { id, imageUrl, soldOut, name, ingredients, unitPrice } = pizza;

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  const handleClick = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
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
            {soldOut ? 'SOLD OUT' : formatCurrency(unitPrice)}
          </p>
        </div>
      </div>
      {!isInCart && !soldOut && (
        <Button onClick={handleClick}>add to cart</Button>
      )}
      {isInCart && (
        <div className="flex items-center gap-2">
          <Button
            varient="circle"
            onClick={() => {
              dispatch(decrementQuantity(id));
            }}
          >
            -
          </Button>
          <p>{currentQuantity}</p>
          <Button
            varient="circle"
            onClick={() => {
              dispatch(incrementQuantity(id));
            }}
          >
            +
          </Button>
          <DeleteButton id={id} />
        </div>
      )}
    </div>
  );
}

export default MenuItem;
