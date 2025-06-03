import React, { useState } from 'react';
import './TableModal.scss';

function TableModal({ table, selectedTime, selectedDate, onClose, onBooked, bookings }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [duration, setDuration] = useState(90); // по умолчанию 1.5 часа

  const getBlockedTimeSlots = (startTimeStr, duration) => {
    const [hours, minutes] = startTimeStr.split(':').map(Number);
    const start = new Date(0, 0, 0, hours, minutes);
    const end = new Date(start.getTime() + duration * 60 * 1000);

    const slots = [];
    const current = new Date(start);
    while (current < end) {
      const h = current.getHours().toString().padStart(2, '0');
      const m = current.getMinutes().toString().padStart(2, '0');
      slots.push(`${h}:${m}`);
      current.setMinutes(current.getMinutes() + 30);
    }

    return slots;
  };

  const isBooked = () => {
    const selectedBlocked = getBlockedTimeSlots(selectedTime, duration);

    return bookings.some(b => {
      if (b.tableId !== table.id || b.date !== selectedDate) return false;

      const bookedBlocked = getBlockedTimeSlots(b.time, b.duration);
      return selectedBlocked.some(slot => bookedBlocked.includes(slot));
    });
  };

  const handleBooking = async () => {
    if (!name || !phone) {
      alert('Пожалуйста, заполните имя и телефон');
      return;
    }

    if (isBooked()) {
      alert('Выбранное время пересекается с уже существующим бронированием.');
      return;
    }

    const startTime = new Date(`${selectedDate}T${selectedTime}:00`);
    const endTime = new Date(startTime.getTime() + duration * 60 * 1000);

    try {
      const response = await fetch('https://eugene-jpan.ru:5000/send-reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          tableId: table.id,
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString(),
          duration,
        }),
      });

      const data = await response.json();
      if (data.status === 'ok') {
        alert('Бронирование успешно отправлено!');
        onBooked(table.id, selectedTime, duration);
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
        <p>Время начала: {selectedTime}</p>

        <label>
          Длительность бронирования:
          <select value={duration} onChange={e => setDuration(parseInt(e.target.value))}>
            <option value={30}>30 минут</option>
            <option value={60}>1 час</option>
            <option value={90}>1.5 часа</option>
            <option value={120}>2 часа</option>
            <option value={150}>2.5 часа</option>
            <option value={180}>3 часа</option>
          </select>
        </label>

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

        <button onClick={handleBooking} disabled={isBooked()}>
          {isBooked() ? 'Столик уже забронирован' : 'Забронировать'}
        </button>

        <button onClick={onClose}>Отмена</button>
      </div>
    </div>
  );
}

export default TableModal;
