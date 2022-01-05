import React from 'react';

const Pricing = () => {
  return (
    <section className="package-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-heading">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title">Pay us Monthly</h2>
              <p className="section__meta">help us now</p>
              <div className="package-content">
                <div className="package__img">
                  <img src="/images/package-small-img.jpg" alt="" />
                  <img src="/images/package-small-img2.jpg" alt="" />
                </div>
                <p className="package__desc">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. This not labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row package-price-wrap">
              <div className="col-lg-6">
                <div className="package-item">
                  <div className="package-top">
                    <span className="package__meta">standard</span>
                    <ul className="package__price">
                      <li>
                        <span className="price__text">$60.00</span>
                      </li>
                      <li>
                        <span className="year__text">monthly</span>
                      </li>
                    </ul>
                  </div>
                  <div className="package-bottom">
                    <ul className="package__list">
                      <li>Free text goes here</li>
                      <li>Write here anything</li>
                      <li>Above mention it</li>
                      <li>Say once again</li>
                    </ul>
                    <a href="#" className="theme-btn">
                      more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="package-item">
                  <div className="package-top">
                    <span className="package__meta">premium</span>
                    <ul className="package__price">
                      <li>
                        <span className="price__text">$90.00</span>
                      </li>
                      <li>
                        <span className="year__text">monthly</span>
                      </li>
                    </ul>
                  </div>
                  <div className="package-bottom">
                    <ul className="package__list">
                      <li>Free text goes here</li>
                      <li>Write here anything</li>
                      <li>Above mention it</li>
                      <li>Say once again</li>
                    </ul>
                    <a href="#" className="theme-btn">
                      more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
