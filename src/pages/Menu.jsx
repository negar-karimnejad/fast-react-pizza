/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router';
import MenuItem from '../components/MenuItem';
import { getMenu } from '../services/apiRestuarant';

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="mx-auto max-w-4xl divide-y divide-stone-200">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
