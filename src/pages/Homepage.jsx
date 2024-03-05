import { useState } from "react";
import { useNavigate } from "react-router";

function Homepage() {
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  const user = true;

  return (
    <div className="flex items-center flex-col justify-center pt-20">
      <h2 className="font-medium text-gray-700 text-xl md:text-3xl">
        The best pizza.
      </h2>
      <h2 className="font-medium text-yellow-500 text-xl mb-10 md:text-3xl">
        Straight out of the oven, straight to you.
      </h2>
      {!user && (
        <>
          <p className="text-sm text-gray-700 mb-5 md:text-lg">
            👋 Welcome! Please start by telling us your name:
          </p>
          <form className="flex flex-col items-center justify-center">
            <input
              className="border border-gray-200 rounded-full px-4 py-2 mb-5 bg-white outline-none focus:ring focus:ring-yellow-300 focus:border-none md:w-72"
              type="text"
              placeholder="Your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            {fullname && (
              <button
                type="button"
                className="font-semibold text-gray-800 bg-yellow-400 rounded-full px-4 py-3 md:w-44 transition-all hover:bg-yellow-300"
              >
                START ORDERING
              </button>
            )}
          </form>
        </>
      )}
      {user && (
        <button
          type="button"
          className="font-semibold text-gray-800 bg-yellow-400 rounded-full px-4 py-3 transition-all hover:bg-yellow-300"
          onClick={() => navigate("/menu")}
        >
          CONTINUE ORDERING, X
        </button>
      )}
    </div>
  );
}

export default Homepage;
