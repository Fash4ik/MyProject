import React, { useState, useEffect } from 'react';
import './ReservationPage.scss';
import TimeSelector from './TimeSelector';
import TableMap from './TableMap';
import TableModal from './TableModal';

const STORAGE_KEY = 'bookings';

// Возвращает список временных слотов (на 1.5 часа вперёд)
function getBlockedTimeSlots(startTimeStr) {
  const [hours, minutes] = startTimeStr.split(':').map(Number);
  const start = new Date(0, 0, 0, hours, minutes);
  const end = new Date(start.getTime() + 90 * 60 * 1000);

  const slots = [];
  const current = new Date(start);
  while (current < end) {
    const h = current.getHours().toString().padStart(2, '0');
    const m = current.getMinutes().toString().padStart(2, '0');
    slots.push(`${h}:${m}`);
    current.setMinutes(current.getMinutes() + 30);
  }

  return slots;
}

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

  // Теперь учитывается и наложение "до" и "после"
  const isTableBooked = (tableId, time, date) => {
    const selectedBlocked = getBlockedTimeSlots(time);

    return bookings.some(b => {
      if (b.tableId !== tableId || b.date !== date) return false;

      const bookedBlocked = getBlockedTimeSlots(b.time);
      // Проверка на пересечение любых временных слотов
      return selectedBlocked.some(slot => bookedBlocked.includes(slot));
    });
  };

  const handleBooked = (tableId) => {
    setBookings(prev => [...prev, { tableId, time: selectedTime, date: selectedDate }]);
    setSelectedTable(null);
  };

  return (
    <div className="reservation-page">
      <div className="container">
        <h1 className="title">БРОНИРОВАНИЕ СТОЛА</h1>

        <p className="reservation-info">
          Бронирование осуществляется <span className="red-text">на 1.5 часа</span> <br />
          Адрес: <strong>Москва, Ул. Большая Дмитровка 10с4</strong>
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
          isBooked={isTableBooked(selectedTable.id, selectedTime, selectedDate)}
        />
      )}
    </div>
  );
}

export default ReservationPage;
