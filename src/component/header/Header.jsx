import { NavLink } from 'react-router-dom';
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
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'nav-text active' : 'nav-text'
                            }
                            >
                            Accueil
                        </NavLink>
                    </li>
                    <li className='nav-text'>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'nav-text active' : 'nav-text'
                            }
                            >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
