import React, { useState } from "react";
import './Dropdown.scss';
import Arrow from '../../../assets/Arrow.svg';

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Inverse l'état actuel
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <div className="dropdown-title">{title}</div>
        <div className="dropdown-arrow-container">
          <img
            src={Arrow}
            alt="arrow"
            className={`dropdown-arrow ${isOpen ? "rotated" : ""}`}
            onClick={toggleDropdown}
          />
        </div>
      </div>
      <div className={`dropdown-content ${isOpen ? 'open' : 'hide'}`}>
        {content.map((item, index) => (
          <div key={index} className="dropdown-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
