import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-stone-800 px-5 py-3 text-gray-200 [&>*]:bg-transparent">
      <div className="flex items-center gap-5 font-medium [&>*]:bg-transparent">
        <p>1 PIZZAS</p>
        <p>€15.00</p>
      </div>
      <Link to={'/cart'} className="uppercase">
        OPEN CART →
      </Link>
    </div>
  );
}

export default CartOverview;
