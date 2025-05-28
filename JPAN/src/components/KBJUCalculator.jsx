// src/components/KBJUCalculator.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KBJUCalculator.scss';

function KBJUCalculator() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Переходим на страницу /calculator
    navigate('/calculator');
  };

  return (
    <section className="kbju-calculator">
      <div className="header-wrapper">
  <div className="header-inner">
    <img
      src={require('../assets/calculator/1.png')}
      alt="Left decoration"
      className="side-image left-image"
    />
    <div className="title-block">
      <h2>Калькулятор КБЖУ</h2>
      <p>
        Воспользуйтесь калькулятором, чтобы рассчитать калорийность, количество
        белков, жиров и углеводов в выбранных блюдах.
      </p>
    </div>
    <img
      src={require('../assets/calculator/2.png')}
      alt="Right decoration"
      className="side-image right-image"
    />
  </div>
</div>

      {/* Переназначили кнопку */}
      <button className="calculate-button" onClick={handleClick}>
        Перейти в калькулятор
      </button>

      <div className="bottom-images">
        <img src={require('../assets/calculator/3.png')} alt="img1" />
        <img
          src={require('../assets/calculator/4.png')}
          alt="img2"
          className="animated-updown"
        />
        <img src={require('../assets/calculator/5.png')} alt="img3" />
        <img src={require('../assets/calculator/6.png')} alt="img4" />
      </div>
    </section>
  );
}

export default KBJUCalculator;
