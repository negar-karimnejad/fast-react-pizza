/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../services/apiRestuarant';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();

  const formErrors = useActionData();

  const isSubmitting = navigation.state === 'submitting';
  const cart = [];

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h2 className="mb-8 text-xl font-bold text-gray-700">
        Ready to order? Let&apos;s go!
      </h2>
      <Form method="POST" className="flex flex-col items-start sm:w-[550px]">
        <label
          htmlFor="firstname"
          className="flex w-full flex-col justify-between md:flex-row"
        >
          <span className="md:mt-3">First Name</span>
          <input
            className="mb-6 w-full rounded-full border border-gray-200 bg-white px-4 py-3 outline-none focus:border-none focus:ring focus:ring-yellow-300 md:w-96"
            type="text"
            id="firstname"
            name="customer"
            required
          />
        </label>
        <label
          htmlFor="phoneNumber"
          className="relative flex w-full flex-col justify-between md:flex-row"
        >
          <span className="md:mt-3">Phone number</span>
          <input
            className="mb-6 w-full rounded-full border border-gray-200 bg-white px-4 py-3 outline-none focus:border-none focus:ring focus:ring-yellow-300 md:w-96"
            type="text"
            id="phoneNumber"
            name="phone"
            required
          />
          {formErrors?.phone && (
            <p className="absolute left-2 top-[75px] z-50 rounded-md bg-red-50 p-0.5 text-xs text-red-700">
              {formErrors.phone}
            </p>
          )}
        </label>
        <label
          htmlFor="address"
          className="relative flex w-full flex-col justify-between md:flex-row"
        >
          <span className="md:mt-3">Address</span>
          <input
            className="mb-6 w-full rounded-full border border-gray-200 bg-white px-4 py-3 outline-none focus:border-none focus:ring focus:ring-yellow-300 md:w-96"
            type="text"
            id="address"
            name="address"
            required
          />
          <button
            type="button"
            className="absolute right-1 top-7 h-10 items-center rounded-full bg-yellow-400 px-4 text-sm text-gray-800 transition-all hover:bg-yellow-300 sm:right-1 sm:top-1"
          >
            GET POSITION
          </button>
        </label>

        <div className="mb-10 mt-5 flex items-center gap-3">
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
          disabled={isSubmitting}
          className="rounded-full bg-yellow-400 px-4 py-3 font-semibold text-gray-800 transition-all hover:bg-yellow-300"
        >
          {isSubmitting ? 'Placing order...' : 'ORDER NOW'}
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
    priority: data.priority === 'on',
    cart: JSON.parse(data.cart),
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';
  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
