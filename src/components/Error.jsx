import { useNavigate, useRouteError } from 'react-router';

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
      <button
        onClick={() => navigate(-1)}
        className="rounded-full bg-yellow-400 px-4 py-2 font-bold transition-all hover:bg-yellow-300"
      >
        ← Go back
      </button>
    </div>
  );
}

export default Error;
