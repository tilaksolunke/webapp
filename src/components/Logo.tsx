import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src={logo}
        alt="Logo"
        width={58}
        height={58}
        className="rounded-circle"
      />
    </Link>
  );
};

export default Logo;
