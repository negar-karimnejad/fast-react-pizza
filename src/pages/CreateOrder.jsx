/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import Button from '../components/Button';
import EmptyCart from '../components/EmptyCart';
import { clearCart, getTotalCartPrice } from '../feature/cart/cartSlice';
import { fetchAddress } from '../feature/user/userSlice';
import { createOrder } from '../services/apiRestuarant';
import store from '../store';
import { formatCurrency } from '../utilities/formatCurrency';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation();
  const { name, address, status, position, error } = useSelector(
    (state) => state.user,
  );
  const isLoading = status === 'loading';

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const isSubmitting = navigation.state === 'submitting';
  const cart = useSelector((state) => state.cart.cart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

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
            className="input mb-6 w-full py-3 md:w-96"
            type="text"
            id="firstname"
            name="customer"
            defaultValue={name}
            required
          />
        </label>
        <label
          htmlFor="phoneNumber"
          className="relative flex w-full flex-col justify-between md:flex-row"
        >
          <span className="md:mt-3">Phone number</span>
          <input
            className="input mb-6 w-full py-3 md:w-96"
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
            className="input mb-6 w-full py-3 md:w-96"
            type="text"
            id="address"
            name="address"
            required
            disabled={isLoading}
            defaultValue={address}
          />
          {status === 'error' && (
            <p className="absolute left-2 top-[75px] z-50 rounded-md bg-red-50 p-0.5 text-xs text-red-700">
              {error}
            </p>
          )}
          {!position.latitude && !position.longitude && (
            <Button
              disabled={isLoading}
              varient="position"
              onClick={() => dispatch(fetchAddress())}
            >
              GET POSITION
            </Button>
          )}
        </label>

        <div className="mb-10 mt-5 flex items-center gap-3">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            id="priority"
            name="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />

          <label htmlFor="priority" className="font-bold text-gray-700">
            Want to you give your order priority?
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="position"
          value={
            position.latitude && position.longitude
              ? `${position.latitude},${position.longitude}`
              : ''
          }
        />
        <Button disabled={isSubmitting || isLoading} type="submit">
          {isSubmitting
            ? 'Placing order...'
            : `ORDER NOW ${formatCurrency(totalPrice)}`}
        </Button>
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
    priority: data.priority === 'true',
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';
  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
