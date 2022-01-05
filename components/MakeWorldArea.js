import React from 'react';

const MakeWorldArea = () => {
  return (
    <section className="make-world-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading text-center">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title">Make World Happier</h2>
              <p className="section__meta">help us now</p>
            </div>
          </div>
        </div>
        <div className="row world-static-wrap">
          <div className="col-lg-4">
            <div className="world-item">
              <div className="world-img-box">
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className="world-img-bg world-img-bg1"></div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="world-item">
              <div className="world-img-box">
                <img src="/images/img5.jpg" alt="" />
              </div>
              <div className="world-img-bg world-img-bg2"></div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="world-item">
              <div className="world-img-box">
                <img src="/images/img6.jpg" alt="" />
              </div>
              <div className="world-img-bg world-img-bg3"></div>
            </div>
          </div>
        </div>
        <div className="row world-static-wrap2">
          <div className="col-lg-5">
            <div className="world-content">
              <h3 className="world__title">
                See how you can make a difference in families lives with just{' '}
                <strong>$6 a month</strong>
              </h3>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="world-content">
              <p className="world__desc">
                Tincidunt elit magnis nulla facilisis sagittis is maecenas.
                Sapien nunced amet ultrices, dolores sit ipsum velit purus
                aliquet, massa fringilla leo orci. Lorem ipsum dolor sit amet,
                consectetur adipisi cing elit dolo rem consequ untur natus
                laudantium commodie adipis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeWorldArea;
