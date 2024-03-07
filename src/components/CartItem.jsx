/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from '../feature/cart/cartSlice';
import { formatCurrency } from '../utilities/formatCurrency';
import DeleteButton from './DeleteButton';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ pizza }) {
  const { pizzaId, quantity, name, totalPrice } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex justify-between gap-y-3 border-b-2 py-5 max-sm:flex-col sm:items-center">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-end gap-8">
        <p className="font-bold text-gray-800">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-3">
          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
          <DeleteButton id={pizzaId} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
