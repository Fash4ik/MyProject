import React, { useState, useEffect } from 'react';
import './ReservationPage.scss';
import TimeSelector from './TimeSelector';
import TableMap from './TableMap';
import TableModal from './TableModal';

const STORAGE_KEY = 'bookings';

function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().slice(0, 10);
  });

  const [selectedTime, setSelectedTime] = useState('17:00');
  const [selectedTable, setSelectedTable] = useState(null);

  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }, [bookings]);

  const isTableBooked = (tableId, time, date) => {
    const selectedBlocked = getBlockedTimeSlots(time, 90); // 90 минут по умолчанию

    return bookings.some(b => {
      if (b.tableId !== tableId || b.date !== date) return false;

      const bookedBlocked = getBlockedTimeSlots(b.time, b.duration);
      return selectedBlocked.some(slot => bookedBlocked.includes(slot));
    });
  };

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

  const handleBooked = (tableId, time, duration) => {
    setBookings(prev => [...prev, { tableId, time, date: selectedDate, duration }]);
    setSelectedTable(null);
  };

  return (
    <div className="reservation-page">
      <div className="container">
        <h1 className="title">БРОНИРОВАНИЕ СТОЛА</h1>

        <p className="reservation-info">
          Адрес: <strong>Москва, Ул. Большая Дмитровка 10с4</strong><p></p>
          Выберите дату и время бронирования.<br></br>Максимальная длительность — <span className="red-text">3 часа</span>, минимальная — <span className="red-text">30 минут</span>.
          <br />
        </p>

        <label className="date-label">
          Выберите дату:
          <input
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            min={new Date().toISOString().slice(0, 10)}
          />
        </label>

        <TimeSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
        <TableMap
          onTableClick={setSelectedTable}
          selectedTime={selectedTime}
          selectedDate={selectedDate}
          isTableBooked={(tableId, time) => isTableBooked(tableId, time, selectedDate)}
        />
      </div>

      {selectedTable && (
        <TableModal
          table={selectedTable}
          selectedTime={selectedTime}
          selectedDate={selectedDate}
          onClose={() => setSelectedTable(null)}
          onBooked={handleBooked}
          bookings={bookings}
        />
      )}
    </div>
  );
}

export default ReservationPage;
