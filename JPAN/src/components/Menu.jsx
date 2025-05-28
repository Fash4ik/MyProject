import React, { useState } from 'react';
import './Menu.scss';

const menuImages = Array.from({ length: 15 }, (_, i) => `/images/menu/menu${i + 1}.webp`);
const barImages = ['/images/bar/bar1.webp', '/images/bar/bar2.webp'];
const timesImages = Array.from({ length: 11 }, (_, i) => `/images/times/times${i + 1}.webp`);


function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [mode, setMode] = useState('menu');

  const menuImages = Array.from({ length: 15 }, (_, i) => `/images/menu/menu${i + 1}.webp`);
  const barImages = ['/images/bar/bar1.webp', '/images/bar/bar2.webp'];
  const timesImages = Array.from({ length: 11 }, (_, i) => `/images/times/times${i + 1}.webp`);

  let images;
  if (mode === 'menu') {
    images = menuImages;
  } else if (mode === 'bar') {
    images = barImages;
  } else if (mode === 'times') {
    images = timesImages;
  }

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openMenu = (selectedMode) => {
    setMode(selectedMode);
    setCurrentImage(0);
    setIsOpen(true);
  };

  const closeMenu = () => setIsOpen(false);


  return (
    <>
      <div className="menu-buttons">
        <button className="btn green" onClick={() => openMenu('menu')}>
          <span>СМОТРЕТЬ МЕНЮ</span>
        </button>
        <button className="btn pink" onClick={() => openMenu('bar')}>
          <span>БАР</span>
        </button>
        <button className="btn red" onClick={() => openMenu('times')}>
          <span>ВРЕМЯ ПРИГОТОВЛЕНИЯ</span>
        </button>
      </div>

      {isOpen && (
  <div className="menu-popup">
    <div className="menu-popup__overlay" onClick={closeMenu} />
    <div className="menu-popup__content">
            <button className="close-button" onClick={closeMenu}>×</button>
            <button className="nav prev" onClick={handlePrev}>&lt;</button>
             <img
        className="menu-popup__image"
        src={images[currentImage]}
        alt={`menu-${currentImage + 1}`}
      />
            <button className="nav next" onClick={handleNext}>&gt;</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
