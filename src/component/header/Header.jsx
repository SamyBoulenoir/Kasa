import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/LOGO.png'

const Header = () => {
  return (
    <header className="header-container">
        <div className='header'>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li className='nav-text'>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className='nav-text'>
                        <Link to="/about">À propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
