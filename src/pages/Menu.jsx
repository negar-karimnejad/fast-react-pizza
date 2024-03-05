import MenuItem from "../components/MenuItem";

function Menu() {
  const menu = [];
  // console.log("menu=>",menu);

  return (
    <div className="max-w-4xl mx-auto">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Menu;
