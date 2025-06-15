import React, { useState } from 'react';
import './ContactBanner.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import contactImage from '../assets/contact/1.jpg';

const ContactBanner = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+7');
  const [comment, setComment] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://eugene-jpan.ru/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, comment }),
      });

      if (response.ok) {
        alert('Сообщение отправлено!');
        setName('');
        setEmail('');
        setPhone('+7');
        setComment('');
        setAgree(false);
      } else {
        alert('Ошибка при отправке');
      }
    } catch (error) {
      alert('Ошибка сети');
    }
  };

  return (
    <section className="contact-banner">
      <div className="contact-text">
        <h2 className="contact-title">НАПИШИТЕ НАМ</h2>
        <p className="contact-subtitle">
          ВАШЕ МНЕНИЕ ИМЕЕТ ЗНАЧЕНИЕ ДЛЯ НАС, ЧТОБЫ МЫ МОГЛИ РАСТИ И УЛУЧШАТЬСЯ ДЛЯ ВАС!
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <PhoneInput
              country={"ru"}
              value={phone}
              onChange={setPhone}
              inputClass="phone-input"
              containerClass="phone-container"
              enableSearch
              disableDropdown={false}
              placeholder="Номер телефона"
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: false,
              }}
            />
            <textarea
              placeholder="Ваш комментарий"
              value={comment}
              onChange={e => setComment(e.target.value)}
              required
            />
            <label className="checkbox">
              <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} required  />
              <span className="agree-text"> Я согласен с <a href="...">политикой конфиденциальности</a> </span></label>
            <button type="submit" disabled={!agree}>Отправить отзыв</button>
          </form>
        </div>
        <div className="contact-image">
          <img src={contactImage} alt="Контактное изображение" />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
