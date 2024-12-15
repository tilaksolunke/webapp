import logo from "../assets/logo.png"
const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img
        src={logo}
        alt="Logo"
        width={58}
        height={58}
        className="rounded-circle"
      />
    </a>
  );
};

export default Logo;
