import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import DeleteButton from '../components/DeleteButton';
import EmptyCart from '../components/EmptyCart';
import { clearCart } from '../feature/cart/cartSlice';
import BackLink from '../components/BackLink';

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.name);
  const cart = useSelector((state) => state.cart.cart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-auto max-w-3xl p-5">
      <BackLink />
      <h2 className="mt-8 text-2xl font-bold text-gray-800">
        Your cart, {user}
      </h2>
      {cart.map((pizza) => (
        <div
          key={pizza.pizzaId}
          className="flex justify-between gap-y-3 border-b-2 py-5 max-sm:flex-col sm:items-center"
        >
          <p>1× {pizza.name}</p>
          <div className="flex items-center justify-end gap-8">
            <p className="font-bold text-gray-800">€{pizza.unitPrice}</p>
            <div className="flex items-center gap-3">
              <Button varient="circle">-</Button>
              <p>1</p>
              <Button varient="circle">+</Button>
              <DeleteButton id={pizza.pizzaId} />
            </div>
          </div>
        </div>
      ))}
      <div className="mt-8 flex gap-2">
        <Button onClick={() => navigate('/order/new')}>ORDER PIZZAS</Button>
        <Button varient="secondary" onClick={() => dispatch(clearCart())}>
          CLEAR CART
        </Button>
      </div>
    </div>
  );
}

export default Cart;
