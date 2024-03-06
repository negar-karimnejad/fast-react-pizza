const BASE_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menu`);
  if (!res.ok) throw new Error("Failed getting menu");
  const { data } = await res.json();
  console.log(data);
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${BASE_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}
