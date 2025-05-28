import React, { useEffect, useState } from 'react';
import './MediaAboutUs.scss';

import photo1 from '../assets/media/photo1.png';
import photo2 from '../assets/media/photo2.png';
import photo3 from '../assets/media/photo3.png';

const mediaItems = [
  {
    img: photo1,
    caption: "J'PAN: культ обыденности",
    link: "https://www.afisha.ru/restaurant-news/jpan-kult-obidennosti/",
  },
  {
    img: photo2,
    caption: "Третье бистро J'PAN открылось в Москве",
    link: "https://antennadaily.ru/2022/08/18/jpan-6/",
  },
  {
    img: photo3,
    caption: "J'PAN. Второе японское бистро в центре Москвы",
    link: "https://www.journeymag.ru/2022/01/06/j-pan-vtoroe-yaponskoe-bistro-v-tsentre-moskvy/",
  },
];

export default function MediaAboutUs() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 900;
    if (isMobile) {
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="media-about-us">
      <h2 className="media-about-us__title">СМИ О НАС</h2>

      <div className="media-about-us__photos-wrapper">
        {showHint && (
          <div className="media-about-us__swipe-hint">Свайпните в сторону →</div>
        )}
        <div className="media-about-us__photos">
          {mediaItems.map(({ img, caption, link }, idx) => (
            <div key={idx} className="media-about-us__item">
              <a href={link} target="_blank" rel="noopener noreferrer" className="media-about-us__link">
                <img src={img} alt={caption} className="media-about-us__image" />
                <p className="media-about-us__caption">{caption}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="media-about-us__map">
        <iframe
          title="J'PAN Locations Map"
          src="https://yandex.ru/map-widget/v1/?um=constructor:356befac23e34d00afdd70a9ff8ff99bded152bf376cf53384cc5663f65d1d7b"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
