import logoImg from '../assets/logo.jpg';
import './Header.css';


function Header() {
  return(
    <header>
    <img src={logoImg} alt="Stylized atom" />
    <h1>Gaming Shop</h1>
    <p>
      Everything you need, to build your own gaming pc!
    </p>
  </header>
  );
  
}

export default Header;