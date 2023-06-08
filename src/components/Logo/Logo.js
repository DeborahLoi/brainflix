import "./Logo.scss";
import logo1 from "../../assets/Logo/BrainFlix-logo.svg";
import { Link } from 'react-router-dom';
function Logo() {
  return (
<Link to="/">
    <img className="nav-bar__logo" src={logo1} alt="Brainflix logo" />
    </Link>
  );
}

export default Logo;
