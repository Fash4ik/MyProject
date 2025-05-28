import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './CalculatorPage.scss';
import dishesData from '../data/dishesData';
import robotoRegularBase64 from '../fonts/robotoBase64';

const sections = [
  { title: 'Закуски', range: [1, 16] },
  { title: 'Гёдза', range: [17, 17] },
  { title: 'Сашими', range: [18, 22] },
  { title: 'Супы', range: [23, 25] },
  { title: 'Гриль', range: [26, 30] },
  { title: 'Разливное пиво', range: [31, 32] },
  { title: 'Рамены', range: [34, 39] },
  { title: 'Кацу & Карри', range: [40, 42] },
  { title: 'Удон', range: [43, 46] },
  { title: 'Лапша', range: [47, 49] },
  { title: 'Донбури', range: [50, 55] },
  { title: 'Коктейли', range: [56, 59] },
  { title: 'Лимонады', range: [60, 61] },
  { title: 'Кофе', range: [62, 64] },
  { title: 'Тапиока', range: [65, 68] },
  { title: 'Матча', range: [69, 74] },
  { title: 'Милкшейки', range: [75, 76] },
  { title: 'Стихии', range: [77, 81] },
  { title: 'Крафтовый чай', range: [82, 84] },
  { title: 'Пиво', range: [85, 92] },
  { title: 'Десерты', range: [93, 100] },
];

export default function CalculatorPage() {
  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const increment = (id) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    setCart(prev => {
      const qty = (prev[id] || 0) - 1;
      const next = { ...prev };
      if (qty > 0) next[id] = qty;
      else delete next[id];
      return next;
    });
  };

  const totals = dishesData.reduce((acc, dish) => {
    const qty = cart[dish.id] || 0;
    acc.calories += dish.calories * qty;
    acc.protein += dish.protein * qty;
    acc.fat += dish.fat * qty;
    acc.carbs += dish.carbs * qty;
    return acc;
  }, { calories: 0, protein: 0, fat: 0, carbs: 0 });

  const generatePDF = async () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    doc.addFileToVFS('Roboto-Regular.ttf', robotoRegularBase64);
    doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
    doc.setFont('Roboto');

    const startX = 10;
    let cursorY = 20;

    doc.setFontSize(18);
    doc.text("Отчёт по выбранным блюдам", startX, cursorY);
    cursorY += 10;

    const selectedDishes = dishesData.filter(dish => cart[dish.id]);

    for (const dish of selectedDishes) {
      const qty = cart[dish.id];

      doc.setFontSize(14);
      doc.text(`${dish.name} x${qty}`, startX, cursorY);
      cursorY += 7;

      doc.setFontSize(12);
      doc.text(`Калории на порцию: ${dish.calories}`, startX, cursorY);
      cursorY += 7;

      if (dish.image) {
        try {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = dish.image;

          await new Promise((res, rej) => {
            img.onload = res;
            img.onerror = rej;
          });

          const imgProps = doc.getImageProperties(img);
          const imgWidth = 40;
          const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

          if (cursorY + imgHeight > 280) {
            doc.addPage();
            cursorY = 20;
          }

          doc.addImage(img, 'JPEG', startX, cursorY, imgWidth, imgHeight);
          cursorY += imgHeight + 10;
        } catch {
          cursorY += 10;
        }
      } else {
        cursorY += 10;
      }

      if (cursorY > 280) {
        doc.addPage();
        cursorY = 20;
      }
    }

    doc.setFontSize(16);
    doc.text('Итоговые показатели:', startX, cursorY);
    cursorY += 8;

    doc.setFontSize(12);
    doc.text(`Калории: ${totals.calories}`, startX, cursorY);
    cursorY += 6;
    doc.text(`Белки: ${totals.protein}`, startX, cursorY);
    cursorY += 6;
    doc.text(`Жиры: ${totals.fat}`, startX, cursorY);
    cursorY += 6;
    doc.text(`Углеводы: ${totals.carbs}`, startX, cursorY);

    doc.save('report.pdf');
  };

  const renderSection = (title, range) => {
    const [start, end] = range;
    const sectionDishes = dishesData.filter(
      d =>
        d.id >= start &&
        d.id <= end &&
        d.name.toLowerCase().includes(searchTerm)
    );

    if (sectionDishes.length === 0) return <></>;

    return (
      <div key={title} className={`menu-section ${title === 'Закуски' ? 'first-section' : ''}`}>
        <h2>{title}</h2>
        <div className="dishes-grid">
          {sectionDishes.map(dish => {
            const qty = cart[dish.id] || 0;
            return (
              <div key={dish.id} className="dish-card">
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <h3 className="dish-name">{dish.name}</h3>
                <div className="dish-info">
                  <span>Кал: {dish.calories}</span>
                  <span>Б: {dish.protein}</span>
                  <span>Ж: {dish.fat}</span>
                  <span>У: {dish.carbs}</span>
                </div>
                <div className="dish-controls">
                  <button onClick={() => decrement(dish.id)} disabled={qty === 0}>-</button>
                  <span className="qty">{qty}</span>
                  <button onClick={() => increment(dish.id)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const filteredDishesExist = sections.some(section => {
    const [start, end] = section.range;
    return dishesData.some(d =>
      d.id >= start &&
      d.id <= end &&
      d.name.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="calculator-page">
      <h1>Калькулятор КБЖУ</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Поиск по меню..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />

      {sections.map(section =>
        renderSection(section.title, section.range)
      )}

      {!filteredDishesExist && searchTerm && (
        <div className="menu-section">
          <h2>К сожалению, таких блюд нет в нашем ассортименте</h2>
        </div>
      )}

      <div className="totals">
        <h2>Итог</h2>
        <div>Калории: {totals.calories}</div>
        <div>Белки: {totals.protein}</div>
        <div>Жиры: {totals.fat}</div>
        <div>Углеводы: {totals.carbs}</div>
      </div>

      <button className="download-btn" onClick={generatePDF} disabled={Object.keys(cart).length === 0}>
        Скачать PDF
      </button>
    </div>
  );
}
