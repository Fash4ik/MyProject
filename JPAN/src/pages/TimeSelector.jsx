import React, { useRef, useEffect } from 'react';
import './TimeSelector.scss';

const times = Array.from({ length: 24 * 2 }, (_, i) => {
  const h = Math.floor(i / 2);
  const m = i % 2 === 0 ? '00' : '30';
  return `${h.toString().padStart(2, '0')}:${m}`;
});

function TimeSelector({ selectedTime, setSelectedTime }) {
  const scrollRef = useRef();

  // Прокрутить так, чтобы активное время было по центру
  useEffect(() => {
    const el = scrollRef.current.querySelector('.time-slot.active');
    if (el) {
      const parent = scrollRef.current;
      parent.scrollTo({
        left: el.offsetLeft - parent.clientWidth / 2 + el.clientWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [selectedTime]);

  return (
    <div className="time-selector">
      <div className="time-line" ref={scrollRef}>
        {times.map((t) => (
          <div
            key={t}
            className={`time-slot ${t === selectedTime ? 'active' : ''}`}
            onClick={() => setSelectedTime(t)}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeSelector;
