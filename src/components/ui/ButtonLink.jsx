import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  // <Link to={to} className="bg-indigo-400 px-4 py-1 rounded-md">
  <Link to={to} className="nav-link active">
    {children}
  </Link>
);
