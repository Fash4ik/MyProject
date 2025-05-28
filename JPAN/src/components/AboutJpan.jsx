import React from 'react';
import './AboutJpan.scss';
import kalmar from '../assets/about/1.png';
import interior from '../assets/about/3.jpeg';
import ramen from '../assets/about/2.png';
import dog1 from '../assets/about/dog1.png';
import dog2 from '../assets/about/dog2.png';

function AboutJpan() {
  return (
    <section className="about-section">
  <div className="header-with-dogs">
    <img src={dog1} alt="Dog Left" className="dog-image dog-left" />
    <h2 className="about-title">НЕМНОГО О J’PAN</h2>
    <img src={dog2} alt="Dog Right" className="dog-image dog-right" />
  </div>

    
  <div className="container">
      <div className="about-grid">

        <div className="about-block about-text-1 gilroy-medium">
          <p>
            Японское бистро с современной городской кухней, в которой нет ни
            столетних традиций, ни тысячелетней истории. Только всё самое
            интересное с живых и быстро меняющихся улиц крупнейших городов Японии.
          </p>
        </div>

        <img src={interior} alt="Интерьер ресторана" className="about-image about-image-1" />

        <img src={kalmar} alt="Десерт в виде кальмара" className="about-image about-image-2" />

        <div className="about-block about-text-2 gilroy-medium">
          <p>
            Для воплощения своей идеи мы много путешествовали по стране восходящего солнца,
            брали мастер-классы у именитых консультантов и заимствовали рецепты из обычных японских домов.
            Мы собрали настоящую коллекцию гастрономических «сувениров»: донбури, рамены, карри, тонкацу и другие
            любимые блюда японцев, в том числе традиционная выпечка на теппане и японских плитах — тайяки и такаояки.
          </p>
        </div>

        <div className="about-block about-text-3 gilroy-medium">
          <p>
            У входа гостей встречает яркая витрина необычных десертов. Например, муссовый десерт в виде маскота JPAN Сибэ-ину.
            В основе меню напитков – церемониальный чай высшего сорта из Киото, который используется в приготовлении
            большей части миксов в бистро.
          </p>
        </div>

        <img src={ramen} alt="Рамен" className="about-image about-image-3" />

      </div>
      </div>
    </section>
  );
}

export default AboutJpan;
