import { useNavigate, useRouteError } from 'react-router';
import Button from './Button';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-gray-800">
        Something went wrong😢
      </h2>
      <p className="font-medium text-gray-700">
        {error?.message || error?.error?.message}
      </p>
      <Button onClick={() => navigate(-1)}>← Go back</Button>
    </div>
  );
}

export default Error;
