import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from '../feature/cart/cartSlice';
import { formatCurrency } from '../utilities/formatCurrency';

function CartOverview() {
  const cartTotalPrice = useSelector(getTotalCartPrice);
  const cartTotalQuantity = useSelector(getTotalCartQuantity);

  if (!cartTotalQuantity) return null;
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-stone-800 px-5 py-3 text-gray-200 [&>*]:bg-transparent">
      <div className="flex items-center gap-5 font-medium [&>*]:bg-transparent">
        <p>{cartTotalQuantity} PIZZAS</p>
        <p>{formatCurrency(cartTotalPrice)}</p>
      </div>
      <Link to={'/cart'} className="uppercase">
        OPEN CART →
      </Link>
    </div>
  );
}

export default CartOverview;
