import { useLoaderData } from 'react-router';
import OrderItem from '../components/OrderItem';
import { getOrder } from '../services/apiRestuarant';
import { formatCurrency } from '../utilities/formatCurrency';

/* eslint-disable react-refresh/only-export-components */
function Order() {
  const order = useLoaderData();

  const {
    // id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    // estimatedDelivery,
    cart,
  } = order;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 p-5">
      <div className="flex items-center justify-between gap-y-3 max-sm:flex-col">
        <h2 className="text-xl font-medium">Order #X status</h2>
        <div className="flex gap-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 bg-stone-200 p-4 max-sm:flex-col">
        <p className="font-medium text-stone-800">Order should have arrived</p>
        <time className="text-[12px] text-stone-500">
          (Estimated delivery: Apr 25, 07:42 AM)
        </time>
      </div>

      <div>
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </div>

      <div className="bg-stone-300 p-5">
        <p className="text-sm">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && (
          <p className="text-sm">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-medium">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
