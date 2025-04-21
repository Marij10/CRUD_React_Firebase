import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>

      <Link to="/ToDos">
        <li>ToDoApp</li>
      </Link>

      <Outlet />
    </ul>
  );
}
