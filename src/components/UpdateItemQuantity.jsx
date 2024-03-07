/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
} from '../feature/cart/cartSlice';
import Button from './Button';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        onClick={() => {
          dispatch(decrementQuantity(pizzaId));
        }}
        varient="circle"
      >
        -
      </Button>
      <Button
        onClick={() => {
          dispatch(incrementQuantity(pizzaId));
        }}
        varient="circle"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
