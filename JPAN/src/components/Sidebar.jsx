import React, { useState } from 'react';
import './Sidebar.scss';
import logo from '../assets/logoJP.svg';
import telegramIcon from '../assets/icons/telegramSB.png';
import vkIcon from '../assets/icons/vkSB.png';
import instagramIcon from '../assets/icons/instagramSB.png';

export default function Sidebar({ onScrollToRef, openModal }) {
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item, ref) => {
    setActiveItem(item);
    setIsOpen(false);
    if (ref) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button className={`sidebar-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
  <span></span>
  <span></span>
  <span></span>
</button>


      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <img src={logo} alt="Logo" className="sidebar-logo" />

        <div
          className={`sidebar-link ${activeItem === 'reservation' ? 'active' : ''}`}
          onClick={() => handleItemClick('reservation', onScrollToRef.reservation)}
        >
          Бронирование на Б.Дмитровке, 10с4
        </div>

        <div
          className={`sidebar-link ${activeItem === 'menu' ? 'active' : ''}`}
          onClick={() => handleItemClick('menu', onScrollToRef.menu)}
        >
          Бар -40%
        </div>

        <div
          className={`sidebar-link ${activeItem === 'menu' ? 'active' : ''}`}
          onClick={() => handleItemClick('menu', onScrollToRef.menu)}
        >
          Меню
        </div>

        <div
          className={`sidebar-link ${activeItem === 'KBJUCalculator' ? 'active' : ''}`}
          onClick={() => handleItemClick('KBJUCalculator', onScrollToRef.KBJUCalculator)}
        >
          КалькуляторКБЖУ
        </div>

        <div
          className={`sidebar-link ${activeItem === 'restaurants' ? 'active' : ''}`}
          onClick={() => handleItemClick('restaurants', onScrollToRef.restaurants)}
        >
          Рестораны
        </div>

        <div
          className={`sidebar-link ${activeItem === 'terrace' ? 'active' : ''}`}
          onClick={() => handleItemClick('terrace', onScrollToRef.terrace)}
        >
          Веранды
        </div>

        <a
          className="sidebar-link"
          href="https://jpan.moscow/team"
          target="_blank"
          rel="noreferrer"
        >
          Работа у нас
        </a>

        <div
          className={`sidebar-link ${activeItem === 'schedule' ? 'active' : ''}`}
          onClick={() => {
            handleItemClick('schedule');
            openModal();
          }}
        >
          Режим работы
        </div>

        <div className="sidebar-socials">
          <a href="https://t.me/jpan_moscow" target="_blank" rel="noreferrer">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a href="https://vk.com/jpanmoscow" target="_blank" rel="noreferrer">
            <img src={vkIcon} alt="VK" />
          </a>
          <a href="https://instagram.com/yourInstagram" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        <button className="sidebar-call">Позвонить нам</button>
      </div>
    </>
  );
}
