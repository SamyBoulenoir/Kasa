import React from 'react';
import './Footer.scss';
import Logo from '../../assets/LOGO(1).png'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt='logo'/>
      <p className="footer-text">© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
