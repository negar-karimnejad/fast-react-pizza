import { useLoaderData } from 'react-router';
import Button from '../components/Button';
import { getOrder } from '../services/apiRestuarant';

/* eslint-disable react-refresh/only-export-components */
function Order() {
  const order = useLoaderData();
  console.log(order);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 p-5">
      <div className="flex items-center justify-between gap-y-3 max-sm:flex-col">
        <h2 className="text-xl font-medium">Order #X status</h2>
        <div className="flex gap-2">
          <Button varient="priority">priority</Button>
          <Button varient="preparing">preparing order</Button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 bg-stone-200 p-4 max-sm:flex-col">
        <p className="font-medium text-stone-800">Order should have arrived</p>
        <time className="text-[12px] text-stone-500">
          (Estimated delivery: Apr 25, 07:42 AM)
        </time>
      </div>

      <div>
        <div className="flex items-center justify-between border border-x-0 border-y p-3">
          <p>1× Romana</p>
          <p className="font-bold text-gray-800">€15.00</p>
        </div>
        <div className="flex items-center justify-between border border-x-0 border-y p-3">
          <p>1× Romana</p>
          <p className="font-bold text-gray-800">€15.00</p>
        </div>
        <div className="flex items-center justify-between border border-x-0 border-y p-3">
          <p>1× Romana</p>
          <p className="font-bold text-gray-800">€15.00</p>
        </div>
      </div>

      <div className="bg-stone-300 p-5">
        <p className="text-sm">Price pizza: €15.00</p>
        <p className="text-sm">Price priority: €29.00</p>
        <p className="font-medium">To pay on delivery: €29.00</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
