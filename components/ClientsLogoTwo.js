import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const ClientsLogoTwo = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 5,
      },

      991: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 3,
      },

      575: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section className="clientlogo-area clientlogo-area2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="client-logo">
              <Swiper {...params}>
                <div className="client-logo-item">
                  <img src="/images/client-logo.png" alt="brand image" />
                </div>
                <div className="client-logo-item">
                  <img src="/images/client-logo.png" alt="brand image" />
                </div>
                <div className="client-logo-item">
                  <img src="/images/client-logo.png" alt="brand image" />
                </div>
                <div className="client-logo-item">
                  <img src="/images/client-logo.png" alt="brand image" />
                </div>
                <div className="client-logo-item">
                  <img src="/images/client-logo.png" alt="brand image" />
                </div>
                <div className="client-logo-item">
                  <img src="/images/client-logo.png" alt="brand image" />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoTwo;
