// App.js
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReservationPage from './pages/ReservationPage';
import CalculatorPage from './pages/CalculatorPage';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);     // Показывает интро
  const [removeIntro, setRemoveIntro] = useState(false); // Удаляет интро из DOM

  const handleIntroFinish = () => {
    setShowIntro(false); // Включаем fade-out
    setTimeout(() => {
      setRemoveIntro(true); // Удаляем из DOM после fade-out (1s)
    }, 1000); // Важно! Совпадает с transition: opacity 1s ease в SCSS
  };

  return (
    <>
      {!removeIntro && <IntroAnimation onFinish={handleIntroFinish} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </>
  );
}

export default App;
