import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReservationPage from './pages/ReservationPage';
import CalculatorPage from './pages/CalculatorPage';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);     
  const [removeIntro, setRemoveIntro] = useState(false); 

  const handleIntroFinish = () => {
    setShowIntro(false); 
    setTimeout(() => {
      setRemoveIntro(true); 
    }, 1000); 
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
