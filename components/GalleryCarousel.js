import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const GalleryCarousel = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      beforeSlideLoad: (slide, data) => {
        // Need to execute a script in the slide?
        // You can do that here...
      },
    });
  });

  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 3,
      },

      991: {
        slidesPerView: 2,
      },

      767: {
        slidesPerView: 1,
      },

      575: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="gallery-area text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title text__white">Check Our Gallery</h2>
              <p className="section__meta">photography</p>
            </div>
          </div>
        </div>
        <div className="row gallery-wrap">
          <div className="col-lg-12">
            <div className="gallery-carousel">
              <Swiper {...params}>
                <div className="gallery-item">
                  <img src="/images/gallery-img.jpg" alt="" />
                  <a href="/images/gallery-img.jpg" className="glightbox">
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-img2.jpg" alt="" />
                  <a href="/images/gallery-img2.jpg" className="glightbox">
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-img3.jpg" alt="" />
                  <a href="/images/gallery-img3.jpg" className="glightbox">
                    {' '}
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-img.jpg" alt="" />
                  <a href="/images/gallery-img.jpg" className="glightbox">
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-img2.jpg" alt="" />
                  <a href="/images/gallery-img2.jpg" className="glightbox">
                    {' '}
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-img.jpg" alt="" />
                  <a href="/images/gallery-img.jpg" className="glightbox">
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-img2.jpg" alt="" />
                  <a href="/images/gallery-img2.jpg" className="glightbox">
                    {' '}
                    <span className="gallery-icon"></span>
                  </a>
                </div>
                <div className="gallery-item">
                  <img src="/images/gallery-img3.jpg" alt="" />
                  <a href="/images/gallery-img3.jpg" className="glightbox">
                    {' '}
                    <span className="gallery-icon"></span>
                  </a>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
