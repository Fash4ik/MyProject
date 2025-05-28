import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import japanAnimation from '../assets/japanAnimation-vmake.mp4';
import logo from '../assets/Jpan.png';
import telegramIcon from '../assets/icons/telegram.png';
import vkIcon from '../assets/icons/vk.png';
import instagramIcon from '../assets/icons/instagram.png';
import Menu from '../components/Menu';
import ReservationBanner from '../components/ReservationBanner';
import AboutJpan from '../components/AboutJpan';
import WaitingForYou from '../components/WaitingForYou';
import TerraceBanner from '../components/TerraceBanner';
import ContactBanner from '../components/ContactBanner';
import KBJUCalculator from '../components/KBJUCalculator';
import MediaAboutUs from '../components/MediaAboutUs';
import Sidebar from '../components/Sidebar'; // не забудь импортировать Sidebar

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const reservationRef = useRef(null);
  const menuRef = useRef(null);
  const restaurantsRef = useRef(null);
  const terraceRef = useRef(null);
  const KBJUCalculatorRef = useRef(null);

  const openModal = () => {
    setShowModal(true);
    setClosing(false);
    setSidebarVisible(false); // скрываем сайдбар при открытии модалки
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setSidebarVisible(true); // показываем сайдбар при закрытии модалки
    }, 300);
  };

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!menuRef.current) return;
      const top = menuRef.current.getBoundingClientRect().top;
      if (top <= window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Рендерим сайдбар только если sidebarVisible === true */}
      {sidebarVisible && (
        <Sidebar
          openModal={openModal}
          onScrollToRef={{
            reservation: reservationRef,
            menu: menuRef,
            bar: menuRef,
            KBJUCalculator: KBJUCalculatorRef,
            restaurants: restaurantsRef,
            terrace: terraceRef,
          }}
        />
      )}


      <section className="hero">
        <video
          className="background-video"
          src={japanAnimation}
          autoPlay
          loop
          muted
          playsInline
        />
        <button className="schedule-button" onClick={openModal}>
          Режим работы: пн–вс 11:00–23:00*
        </button>
        <div className="hero-content">
          <div className="blur-background" />
          <img src={logo} alt="J'PAN logo" className="logo-image" />
          <p>Современная японская кухня в самом центре Москвы</p>
        </div>
      </section>

      {/* Модалка */}
      {showModal && (
  <div
    className={`modal-overlay ${closing ? 'closing' : ''}`}
    onClick={closeModal}
  >
    <div
      className={`modal ${closing ? 'closing' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Крестик закрытия */}
      <button 
        className="modal-close-btn" 
        onClick={closeModal} 
        aria-label="Закрыть модальное окно"
        type="button"
      >
        ×
      </button>

      <h3 className="modal-title">Режим работы</h3>
      <ul className="schedule-list">
        {[
          'Забелина, 1',
          'Трубная, 21',
          'Мясницкая, 22/1',
          'Чаянова, 22 стр 4',
          'Пятницкая, 6/1',
          'Большая Дмитровка, 10с4',
          'Большая Грузинская, 76',
          'Льва Толстого, 16',
        ].map((addr) => (
          <li key={addr}>
            <span className="address">✅ {addr}</span>{' '}
            <span className="time">
              Вс–Чт 11:00–23:00, Пт–Сб 11:00–00:00
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

      {/* Прокручиваемые секции с ref */}
      <div ref={reservationRef}>
        <ReservationBanner />
      </div>

      <div ref={menuRef}>
        <Menu />
      </div>

      <section className="menu-section">
        <div className="container">
          <h2 className="menu-title">наше меню</h2>
          <div className="menu-gallery">
            {[...Array(8)].map((_, idx) => (
              <img
                key={idx}
                src={require(`../assets/menu/menu${idx + 1}.jpg`)}
                alt={`Меню ${idx + 1}`}
                className={`menu-image ${
                  isVisible ? 'visible' : ''
                } ${idx % 2 === 0 ? 'shift-up' : 'shift-down'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutJpan />

      <div ref={restaurantsRef}>
        <WaitingForYou onScrollToMenu={scrollToMenu} />
      </div>

      <div ref={terraceRef}>
        <TerraceBanner />
      </div>

      <ContactBanner />

       <div ref={KBJUCalculatorRef}>
      <KBJUCalculator />
      </div>
      <MediaAboutUs />

      <footer className="footer">
        <div className="footer-bar">
          <img src={logo} alt="J'PAN logo" className="footer-logo-img" />

          <button className="footer-schedule-button" onClick={openModal}>
            Режим работы: пн–вс 11:00–23:00*
          </button>

          <span
            className="footer-scroll-top"
            onClick={scrollToTop}
            role="button"
            tabIndex="0"
          >
            НАВЕРХ
          </span>

          <span className="footer-phone">8 (985) 211-85-58</span>

          <div className="footer-icons">
            <a
              href="https://t.me/jpan_moscow"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegramIcon} alt="Telegram" className="social-icon" />
            </a>
            <a href="https://vk.com/jpanmoscow" target="_blank" rel="noreferrer">
              <img src={vkIcon} alt="VK" className="social-icon" />
            </a>
            <a
              href="https://instagram.com/yourInstagram"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>

          <button className="footer-call-button">Позвонить нам</button>
        </div>
      </footer>
    </div>
  );
}
