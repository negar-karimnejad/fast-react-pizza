/* eslint-disable react/prop-types */
import { formatCurrency } from '../utilities/formatCurrency';

function OrderItem({ item }) {
  return (
    <div className="flex items-center justify-between border border-x-0 border-y p-3">
      <p>
        {item.quantity}&times; {item.name}
      </p>
      <p className="font-bold text-gray-800">
        {formatCurrency(item.totalPrice)}
      </p>
    </div>
  );
}

export default OrderItem;
