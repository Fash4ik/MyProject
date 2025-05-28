import React from 'react';
import './TableMap.scss';

const tables = [
  { id: 1,  x: 100, y:  20, status: 'free', duration: '' },
  { id: 2,  x: 250, y:  20, status: 'free', duration: '' },
  { id: 3,  x: 400, y:  20, status: 'free', duration: '' },
  { id: 4,  x: 550, y:  20, status: 'free', duration: '' },
  { id: 5,  x: 700, y:  20, status: 'free', duration: '' },
  { id: 6,  x: 850, y:  20, status: 'free', duration: '' },
  { id: 7,  x: 1000,y:  20, status: 'free', duration: '' },

  { id: 8,  x: 175, y: 170, status: 'free', duration: '' },
  { id: 9,  x: 325, y: 170, status: 'free', duration: '' },
  { id: 10, x: 475, y: 170, status: 'free', duration: '' },
  { id: 11, x: 625, y: 170, status: 'free', duration: '' },
  { id: 12, x: 775, y: 170, status: 'free', duration: '' },
  { id: 13, x: 925, y: 170, status: 'free', duration: '' },

  { id: 14, x: 100, y: 340, status: 'free', duration: '' },
  { id: 15, x: 250, y: 340, status: 'free', duration: '' },
  { id: 16, x: 400, y: 340, status: 'free', duration: '' },
  { id: 17, x: 550, y: 340, status: 'free', duration: '' },
  { id: 18, x: 700, y: 340, status: 'free', duration: '' },
  { id: 19, x: 850, y: 340, status: 'free', duration: '' },
  { id: 20, x: 1000,y: 340, status: 'free', duration: '' },

  { id: 21, x: 30,  y: 170, status: 'free', duration: '' },
];

export default function TableMap({ onTableClick, selectedTime, selectedDate, isTableBooked }) {
  return (
    <div className="table-map-wrapper">
      <div className="table-map">
        {tables.map((t) => {
          const bookedNow = isTableBooked(t.id, selectedTime, selectedDate);
          const isFree = t.status === 'free' && !bookedNow;

          return (
            <div
              key={t.id}
              className={`table-wrapper ${isFree ? 'free' : 'busy'}`}
              style={{ left: t.x, top: t.y }}
              onClick={() => isFree && onTableClick(t)}
            >
              <div className="chair chair-top" />
              <div className="chair chair-left" />
              <div className="chair chair-right" />
               <div className="table">
    <div className="table-id">{t.id}</div>
    {(t.duration && !bookedNow) && (
      <div className="table-duration">{t.duration}</div>
    )}
  </div>
  <div className="chair chair-bottom" />

  {bookedNow && (
    <div className="reservation-label">Забронирован</div>
  )}
</div>
          );
        })}
      </div>
    </div>
  );
}
