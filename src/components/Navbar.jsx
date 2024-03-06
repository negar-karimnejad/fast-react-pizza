import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const user = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <nav className="bg-yellow-400 flex items-center justify-between py-3 px-5">
      <Link
        to={"/"}
        className="font-mono text-gray-700 sm:text-lg bg-transparent"
      >
        FAST REACT PIZZA CO.
      </Link>

      <form onSubmit={handleSubmit} className="bg-transparent">
        <input
          className="w-32 rounded-full bg-yellow-100 px-4 py-2 transition-all duration-300 placeholder:text-stone-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
          type="text"
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {user && (
        <p className="uppercase bg-transparent font-medium text-sm hidden md:block">
          X
        </p>
      )}
    </nav>
  );
}

export default Navbar;
