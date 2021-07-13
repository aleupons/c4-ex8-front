import { Link } from "react-router-dom";

export const Header = (props) => {
  const { login, setLogin } = props;

  const sortir = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    setLogin(false);
  };

  return (
    <header>
      <nav>
        <ul className="list-unstyled d-flex flex-row-reverse">
          <li className="p-2">
            <Link to="./principal">Inici</Link>
          </li>
          <li className="p-2">
            <Link to="./llistat">Llistat</Link>
          </li>
          {login && (
            <li className="p-2" onClick={sortir}>
              <Link to="./principal">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
