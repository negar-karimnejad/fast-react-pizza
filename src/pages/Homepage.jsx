import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { useNavigate } from 'react-router';
import CreateUser from '../components/CreateUser';

function Homepage() {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.name);

  return (
    <div className="flex flex-col items-center justify-center pt-20 text-center">
      <h2 className="text-xl font-medium text-gray-700 md:text-3xl">
        The best pizza.
      </h2>
      <h2 className="mb-10 text-xl font-medium text-yellow-500 md:text-3xl">
        Straight out of the oven, straight to you.
      </h2>
      {!user ? (
        <CreateUser />
      ) : (
        <Button onClick={() => navigate('/menu')}>
          CONTINUE ORDERING, <span className="uppercase">{user}</span>
        </Button>
      )}
    </div>
  );
}

export default Homepage;
