import Logo from './Logo';
import NavSearch from './NavSearch';
import User from './User';

function Navbar() {
  const user = true;

  return (
    <nav className="flex items-center justify-between bg-yellow-400 px-5 py-3">
      <Logo />
      <NavSearch />
      {user && <User />}
    </nav>
  );
}

export default Navbar;
