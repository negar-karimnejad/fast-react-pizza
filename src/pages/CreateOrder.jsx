/* eslint-disable react-refresh/only-export-components */
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../services/apiRestuarant";

function CreateOrder() {
  const cart = [];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="font-bold text-gray-700 text-xl mb-8">
        Ready to order? Let&apos;s go!
      </h2>
      <Form method="POST" className="flex flex-col sm:w-[550px] items-start">
        <label
          htmlFor="firstname"
          className="flex justify-between flex-col md:flex-row w-full"
        >
          <span className="md:mt-3">First Name</span>
          <input
            className="w-full border border-gray-200 rounded-full px-4 py-3 mb-5 bg-white outline-none focus:ring focus:ring-yellow-300 focus:border-none md:w-96"
            type="text"
            id="firstname"
            name="customer"
          />
        </label>
        <label
          htmlFor="phoneNumber"
          className="flex justify-between flex-col md:flex-row w-full"
        >
          <span className="md:mt-3">Phone number</span>
          <input
            className="w-full border border-gray-200 rounded-full px-4 py-3 mb-5 bg-white outline-none focus:ring focus:ring-yellow-300 focus:border-none md:w-96"
            type="text"
            id="phoneNumber"
            name="phone"
          />
        </label>
        <label
          htmlFor="address"
          className="relative flex justify-between flex-col md:flex-row w-full"
        >
          <span className="md:mt-3">Address</span>
          <input
            className="w-full border border-gray-200 rounded-full px-4 py-3 mb-5 bg-white outline-none focus:ring focus:ring-yellow-300 focus:border-none md:w-96"
            type="text"
            id="address"
            name="address"
          />
          <button
            type="button"
            className="absolute items-center sm:right-1 right-1 sm:top-1 top-7 h-10 text-sm text-gray-800 bg-yellow-400 rounded-full px-4 transition-all hover:bg-yellow-300"
          >
            GET POSITION
          </button>
        </label>

        <div className="flex items-center gap-3 mt-5 mb-10">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            id="priority"
            name="priority"
          />

          <label htmlFor="priority" className="font-bold text-gray-700">
            Want to you give your order priority?
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <button
          type="submit"
          className="font-semibold text-gray-800 bg-yellow-400 rounded-full px-4 py-3 transition-all hover:bg-yellow-300"
        >
          ORDER NOW FROM €18.00
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);

  console.log("formData=>", order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
