import React, { useState } from 'react';
import './TerraceBanner.scss';
import sakuraLeft from '../assets/terraces/sakura-left.webp';
import sakuraRight from '../assets/terraces/sakura-right.webp';

const terraces = [
  { title: 'Забелина', images: ['1-1.jpg','1-2.jpg', '1-3.jpg'] },
  { title: 'Мясницкая', images: ['2-1.jpg','2-2.jpg', '2-3.jpg']},
  { title: 'Пятницкая', images:['3-1.png','3-2.png', '3-3.png'] },
  { title: 'Чаянова', images: ['4-1.jpg','4-2.jpg'] }
];

const TerraceBanner = () => {
  const [indices, setIndices] = useState(Array(4).fill(0));

  const showPrev = (i) => {
    setIndices((prev) =>
      prev.map((val, idx) =>
        idx === i ? (val === 0 ? terraces[i].images.length - 1 : val - 1) : val
      )
    );
  };

  const showNext = (i) => {
    setIndices((prev) =>
      prev.map((val, idx) =>
        idx === i ? (val === terraces[i].images.length - 1 ? 0 : val + 1) : val
      )
    );
  };

  return (
    <section className="terrace-banner">
      <h2 className="terrace-title">МЫ ОТКРЫЛИ ВЕРАНДЫ!</h2>

      {/* Обёртки для сакуры */}
      <div className="sakura-wrapper left">
        <img src={sakuraLeft} className="sakura" alt="Сакура" />
      </div>
      <div className="sakura-wrapper right">
        <img src={sakuraRight} className="sakura" alt="Сакура" />
      </div>

      <div className="terrace-grid">
        {terraces.map((terrace, i) => (
          <div key={i} className="terrace-card">
            <div className="carousel">
              <button className="nav left" onClick={() => showPrev(i)}>‹</button>
              <img
                src={require(`../assets/terraces/${terrace.images[indices[i]]}`)}
                alt={terrace.title}
              />
              <button className="nav right" onClick={() => showNext(i)}>›</button>
            </div>
            <p className="terrace-label">{terrace.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TerraceBanner;
