import './css/navbar.css';
import logo from './media/navbar-logo.png';

const NavBar = () => {
  return (
    <div class="navbar">
        <a href="#">
            <img src={logo} alt="Lucki"/>
        </a>
        <div class="navbar-shop-link">
            <a href="https://shop.sincerelylucki.com/">
                <h2>Shop</h2>
            </a>
        </div>
    </div>
  );
};

export default NavBar;