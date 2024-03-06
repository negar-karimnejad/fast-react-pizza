import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useSelector } from 'react-redux';

function Cart() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.name);
  const [isEmpty] = useState(false);

  return (
    <div className="mx-auto max-w-3xl p-5">
      <Link to={'/menu'} className="text-blue-500">
        ← Back to menu
      </Link>
      {isEmpty ? (
        <p className="mt-8 font-bold text-gray-700">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      ) : (
        <>
          <h2 className="mt-8 text-2xl font-bold text-gray-800">
            Your cart, {user}
          </h2>
          <div className="flex justify-between gap-y-3 border-b-2 py-5 max-sm:flex-col sm:items-center">
            <p>1× Romana</p>
            <div className="flex items-center justify-end gap-8">
              <p className="font-bold text-gray-800">€15.00</p>
              <div className="flex items-center gap-3">
                <Button varient="circle">-</Button>
                <p>1</p>
                <Button varient="circle">+</Button>
                <Button>delete</Button>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-y-3 border-b-2 py-5 max-sm:flex-col sm:items-center">
            <p>1× Romana</p>
            <div className="flex items-center justify-end gap-8">
              <p className="font-bold text-gray-800">€15.00</p>
              <div className="flex items-center gap-3">
                <Button varient="circle">-</Button>
                <p>1</p>
                <Button varient="circle">+</Button>
                <Button>delete</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-2">
            <Button onClick={() => navigate('/order/new')}>ORDER PIZZAS</Button>
            <Button varient="secondary">CLEAR CART</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
