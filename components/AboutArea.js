import React from 'react';

const AboutArea = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-large-img">
              <img src="/images/about-img.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-semi-img">
              <img src="/images/about-img2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-heading">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title">Discover About BeCluedUp</h2>
                <p className="section__meta">learn about non profit agency</p>
                <p className="section__desc">
                  Tincidunt elit magnis nulla facilisis sagittis maecenas.
                  Sapien nunced amet ultrices, dolores sit ipsum velit purus
                  aliquet, massa fringilla leo orcium dolors sit amet elit
                  magnis amet ultrices lorem ipsum is simply free text purusrfed
                  aliquet. Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus. penatibus et magnis dis parturient montes,
                  nascetur ridiculus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
