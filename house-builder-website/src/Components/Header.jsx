import openNav from "../assets/menu.png";
import closeNav from "../assets/cross.png";
import React, { useState } from "react";

function Header({ onAboutClick, onHomeClick, onTestimonialClick, onServicesClick, onContactClick }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(true);
  }
  const handlecloseNav = () => {
    setIsOpen(false);
  }

  return (
    <>
      <header>
        <div className="logo">
          <h1>Logo</h1>
        </div>

        <nav className={`${isOpen ? "active" : ""}`}>
          <ul>
            <img src={closeNav} width={30} onClick={handlecloseNav} alt="close navigation button" id="closeNavBtn" />
            <li>
              <button onClick={onHomeClick}>Home</button>
            </li>
            <li>
              <button onClick={onAboutClick}>About</button>
            </li>
            <li>
              <button onClick={onTestimonialClick}>Testimonial</button>
            </li>
            <li>
              <button onClick={onServicesClick}>Serivces</button>
            </li>
            <li>
              <button onClick={onContactClick}>Contact</button>
            </li>
          </ul>
        </nav>
        <img src={openNav} width={30} onClick={handleOpenNav} alt="open navigation button" id="openNavBtn" />
      </header>
    </>
  );
}

export default Header;
