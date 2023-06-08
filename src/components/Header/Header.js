import './Header.scss';
import Logo from "../Logo/Logo";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import ButtonUpload from "../ButtonUpload/ButtonUpload";

function Header() {
  return (
    <header className='nav-bar'>
      <Logo />
      <ButtonSearch />
      <ButtonUpload />
    </header>
  );
}

export default Header;
