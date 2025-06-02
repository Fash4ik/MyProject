import React, { useEffect, useRef, useState } from 'react';
import './WaitingForYou.scss';

const locations = [
  {
    address: 'Трубная, 21',
    color: 'lightgreen',
    metro: 'Трубная',
    images: ['1-1.webp', '1-2.webp', '1-3.webp'],
  },
  {
    address: 'Мясницкая, 22 стр 1',
    color: 'red',
    metro: 'Чистые пруды',
    images: ['2-1.webp', '2-2.webp', '2-3.webp'],
  },
  {
    address: 'Чаянова 22, стр 4',
    color: 'brown',
    metro: 'Новослободская',
    images: ['3-1.webp', '3-2.webp', '3-3.webp'],
  },
  {
    address: 'Забелина, 1',
    color: 'red',
    metro: 'Китай-город',
    images: ['4-1.webp', '4-2.webp', '4-3.webp'],
  },
  {
    address: 'Пятницкая, д. 6/1',
    color: 'green',
    metro: 'Новокузнецкая',
    images: ['5-1.webp', '5-2.webp', '5-3.webp'],
  },
  {
    address: 'Б.Дмитровка, д.10 с4',
    color: 'red',
    metro: 'Охотный ряд',
    images: ['6-1.webp', '6-2.webp', '6-3.webp'],
  },
  {
    address: 'Большая Грузинская, 76',
    color: 'brown',
    metro: 'Белорусская',
    images: ['7-1.webp', '7-2.webp', '7-3.webp'],
  },
  {
    address: 'Льва Толстого, 16',
    color: 'brown',
    metro: 'Парк Культуры',
    images: ['8-1.webp', '8-2.webp', '8-3.webp'],
  },
];

function Carousel({ images, onImageClick }) {
  const carouselRef = useRef();
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        index = (index + 1) % images.length;
        carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-images" ref={carouselRef}>
        {images.map((src, i) => (
          <img
            key={i}
            src={require(`../assets/locations/${src}`)}
            alt={`Slide ${i}`}
            onClick={() => onImageClick(i)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
}

function WaitingForYou({ onScrollToMenu }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Открыть лайтбокс с определенным изображением и массивом картинок
  const openLightbox = (images, index) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="waiting-section">
      <h2 className="waiting-title">ЖДЕМ ВАС В J'PAN</h2>
      
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div className="location-card" key={index}>
            <Carousel
              images={location.images}
              onImageClick={(imgIndex) => openLightbox(location.images, imgIndex)}
            />
            <div className="location-info">
              <div className="address-line">
                <p className="address">{location.address}</p>
                <div className="metro">
                  <span
                    className="circle"
                    style={{ backgroundColor: location.color }}
                  ></span>
                  <span className="metro-name">{location.metro}</span>
                </div>
              </div>
              <div className="location-buttons">
                <a
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-btn"
                > Как добраться
                </a>
                
                <button
                  onClick={onScrollToMenu}
                  className="location-btn"
                  type="button"
                >
                  Смотреть меню
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            <button className="lightbox-prev" onClick={showPrev}>
              ‹
            </button>
            <img
              src={require(`../assets/locations/${currentImages[currentIndex]}`)}
              alt={`Lightbox ${currentIndex}`}
            />
            <button className="lightbox-next" onClick={showNext}>
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default WaitingForYou;
