import React from 'react';
import { useNavigate } from 'react-router-dom'; // импорт
import './ReservationBanner.scss';
import reservation1 from '../assets/reservbanner/1.webp';
import reservation2 from '../assets/reservbanner/2.webp';
import reservation3 from '../assets/reservbanner/3.webp';

function ReservationBanner() {
  const navigate = useNavigate(); // хук для навигации

  const handleReservationClick = () => {
    navigate('/reservation'); // переход по маршруту
  };

  return (
    <section className="reservation-banner">
      <button className="address-button">
        −1 этаж в J'PAN на Б. Дмитровке 10с4
      </button>

      <h2 className="reservation-title">БРОНИРОВАНИЕ ОТКРЫТО!</h2>

      <div className="reservation-gallery">
        <img className="image-normal" src={reservation1} alt="Ресторан 1" />
        <img className="image-normal" src={reservation2} alt="Ресторан 2" />
        <img className="image-tall" src={reservation3} alt="Ресторан 3" />
      </div>

      <button className="reservation-button" onClick={handleReservationClick}>
        ЗАБРОНИРОВАТЬ СТОЛ
      </button>
    </section>
  );
}

export default ReservationBanner;
