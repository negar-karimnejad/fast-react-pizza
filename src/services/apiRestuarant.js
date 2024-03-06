const BASE_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menu`);
  if (!res.ok) throw new Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${BASE_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${BASE_URL}/order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder),
    });
    if (!res.ok) throw Error;
    const { data } = await res.json();
    return data;
  } catch (error) {
    throw new Error('Failed to creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${BASE_URL}/order/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateObj),
    });
    if (!res.ok) throw Error;
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Faild to updating your order');
  }
}
