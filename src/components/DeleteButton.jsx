/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteFromCart } from '../feature/cart/cartSlice';

function DeleteButton({id}) {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(deleteFromCart(id))}>delete</Button>;
}

export default DeleteButton;
