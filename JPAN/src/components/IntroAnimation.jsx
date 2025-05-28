import React, { useEffect, useState } from 'react';
import './IntroAnimation.scss';
import logoPng from '../assets/logoJP.svg';

function IntroAnimation({ onFinish }) {
  const [animateLogo, setAnimateLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const logoAnimationDelay = 1000;

    const logoTimer = setTimeout(() => {
      setAnimateLogo(true);
    }, logoAnimationDelay);

    const totalDuration = logoAnimationDelay + 4000;

    const fadeOutDelay = setTimeout(() => {
      setFadeOut(true); // Запускаем исчезновение
    }, totalDuration);

    const removeAfterFade = setTimeout(() => {
      onFinish(); // Только после исчезновения
    }, totalDuration + 1000); // 1s = длительность fadeOut в CSS

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeOutDelay);
      clearTimeout(removeAfterFade);
    };
  }, [onFinish]);

  const leavesCount = 70;
  const leaves = [...Array(leavesCount)].map(() => ({
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 3,
    size: 15 + Math.random() * 40,
    rotateStart: Math.random() * 360,
  }));

  return (
    <div className={`intro-animation ${fadeOut ? 'fade-out' : ''}`}>
      <div className={`logo ${animateLogo ? 'animate' : ''}`}>
        <img src={logoPng} alt="Логотип" />
      </div>

      <div className="wind" />

      <div className="sakura-leaves">
        {leaves.map(({ top, delay, duration, size, rotateStart }, i) => (
          <div
            key={i}
            className="leaf"
            style={{
              top: `${top}vh`,
              left: `-10vw`,
              width: `${size}px`,
              height: `${size}px`,
              animationName: 'floatRight',
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(${rotateStart}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default IntroAnimation;
