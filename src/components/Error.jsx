import { useNavigate, useRouteError } from "react-router";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <h2 className="font-bold text-2xl text-gray-800">
        Something went wrong😢
      </h2>
      <p className="text-gray-700 font-medium">
        {error?.message || error?.error?.message}
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-yellow-400 rounded-full transition-all hover:bg-yellow-300 font-bold py-2 px-4"
      >
        ← Go back
      </button>
    </div>
  );
}

export default Error;
