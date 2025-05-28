import React, { useState } from 'react';
import './TableModal.scss';

function TableModal({ table, selectedTime, selectedDate, onClose, onBooked, isBooked }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleBooking = async () => {
    if (!name || !phone) {
      alert('Пожалуйста, заполните имя и телефон');
      return;
    }

    const startTime = new Date(`${selectedDate}T${selectedTime}:00`);
    const endTime = new Date(startTime.getTime() + 90 * 60 * 1000);

    try {
      const response = await fetch('http://localhost:5000/send-reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          tableId: table.id,
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString(),
        }),
      });

      const data = await response.json();
      if (data.status === 'ok') {
        alert('Бронирование успешно отправлено!');
        onBooked(table.id);
        onClose();
      } else {
        alert('Ошибка при бронировании');
      }
    } catch (error) {
      alert('Ошибка при отправке брони: ' + error.message);
    }
  };

  return (
    <div className="tablemodal-overlay" onClick={onClose}>
      <div className="tablemodal-window" onClick={e => e.stopPropagation()}>
        <button className="tablemodal-close" onClick={onClose}>&times;</button>

        <h2>Бронирование столика №{table.id}</h2>
        <p>Дата: {selectedDate}</p>
        <p>Время: {selectedTime} (1.5 часа)</p>

        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <button onClick={handleBooking} disabled={isBooked}>
          {isBooked ? 'Столик уже забронирован' : 'Забронировать'}
        </button>

        <button onClick={onClose}>Отмена</button>
      </div>
    </div>
  );
}

export default TableModal;
