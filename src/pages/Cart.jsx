import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackLink from '../components/BackLink';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmptyCart';
import { clearCart } from '../feature/cart/cartSlice';

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
        <CartItem key={pizza.pizzaId} pizza={pizza} />
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
