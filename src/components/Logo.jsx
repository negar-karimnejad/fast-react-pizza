import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to={'/'}
      className="bg-transparent font-mono text-gray-700 sm:text-lg"
    >
      FAST REACT PIZZA CO.
    </Link>
  );
}

export default Logo;
