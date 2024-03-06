import { useState } from 'react';
import { useNavigate } from 'react-router';

function Homepage() {
  const [fullname, setFullname] = useState('');
  const navigate = useNavigate();

  const user = true;

  return (
    <div className="flex flex-col items-center justify-center pt-20 text-center">
      <h2 className="text-xl font-medium text-gray-700 md:text-3xl">
        The best pizza.
      </h2>
      <h2 className="mb-10 text-xl font-medium text-yellow-500 md:text-3xl">
        Straight out of the oven, straight to you.
      </h2>
      {!user && (
        <>
          <p className="mb-5 text-sm text-gray-700 md:text-lg">
            👋 Welcome! Please start by telling us your name:
          </p>
          <form className="flex flex-col items-center justify-center">
            <input
              className="mb-5 rounded-full border border-gray-200 bg-white px-4 py-2 outline-none focus:border-none focus:ring focus:ring-yellow-300 md:w-72"
              type="text"
              placeholder="Your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            {fullname && (
              <button
                type="button"
                className="rounded-full bg-yellow-400 px-4 py-3 font-semibold text-gray-800 transition-all hover:bg-yellow-300 md:w-44"
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
          className="rounded-full bg-yellow-400 px-4 py-3 font-semibold text-gray-800 transition-all hover:bg-yellow-300"
          onClick={() => navigate('/menu')}
        >
          CONTINUE ORDERING, X
        </button>
      )}
    </div>
  );
}

export default Homepage;
