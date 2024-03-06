import { useState } from "react";
import { useNavigate } from "react-router";

function NavSearch() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!query) return;
      navigate(`/order/${query}`);
      setQuery('');
    };
  return (
    <form onSubmit={handleSubmit} className="bg-transparent">
        <input
          className="input w-32 bg-yellow-100 sm:w-64 sm:focus:w-72"
          type="text"
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
  )
}

export default NavSearch