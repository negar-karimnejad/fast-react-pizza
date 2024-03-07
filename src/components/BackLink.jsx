import { Link } from "react-router-dom";

function BackLink() {
  return (
    <Link to={'/menu'} className="text-blue-500">
      ← Back to menu
    </Link>
  );
}

export default BackLink;
