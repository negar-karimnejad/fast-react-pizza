import BackLink from './BackLink';

function EmptyCart() {
  return (
    <div className="p-5">
      <BackLink />
      <p className="mt-8 font-bold text-gray-700">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
