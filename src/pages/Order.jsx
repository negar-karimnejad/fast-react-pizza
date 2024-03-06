import { useLoaderData } from "react-router";
import { getOrder } from "../services/apiRestuarant";

/* eslint-disable react-refresh/only-export-components */
function Order() {
  const order = useLoaderData();
  console.log(order);

  return <div>Order</div>;
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
