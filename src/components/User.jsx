import { useSelector } from 'react-redux';

function User() {
  const user = useSelector((store) => store.user.name);
  if (!user) return null;
  
  return (
    <p className="hidden bg-transparent text-sm font-medium uppercase md:block">
      {user}
    </p>
  );
}

export default User;
