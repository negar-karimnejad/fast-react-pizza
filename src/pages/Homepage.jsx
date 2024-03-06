import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../components/Button';

function Homepage() {
  const [fullname, setFullname] = useState('');
  const navigate = useNavigate();

  const user = false;

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
              className="input mb-8"
              type="text"
              placeholder="Your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            {fullname && <Button>START ORDERING</Button>}
          </form>
        </>
      )}
      {user && (
        <Button onClick={() => navigate('/menu')}>CONTINUE ORDERING, X</Button>
      )}
    </div>
  );
}

export default Homepage;
