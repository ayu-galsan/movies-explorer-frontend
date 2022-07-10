import { Link } from "react-router-dom";
import "./RegisterNav.css";

function RegisterNav() {
  return (
    <nav className="reg-navigation">
      <Link to="/signup" className="reg-navigation__signUp">
        Регистрация
      </Link>
      <Link to="/signin" className="reg-navigation_signIn">
        Войти
      </Link>
    </nav>
  );
}

export default RegisterNav;
