import React from 'react';

const HelpingArea = () => {
  return (
    <div>
      <section className="mixer-area helping-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading mixer-heading">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title">
                  Give a helping hand for homeless childrens
                </h2>
              </div>
              <div className="helping-item">
                <div className="row">
                  <div className="col">
                    <div className="helping-box helping-box1">
                      <i className="icon-hamburger"></i>
                      <h4>food</h4>
                    </div>
                  </div>
                  <div className="col">
                    <div className="helping-box helping-box2">
                      <i className="icon-water-bottle"></i>
                      <h4>water</h4>
                    </div>
                  </div>
                  <div className="col">
                    <div className="helping-box helping-box3">
                      <i className="icon-health"></i>
                      <h4>Medical</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="helping-text-box">
                <p className="helping__text">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis simply free text sollicitud. Lorem ipsum dolor sit
                  amet, consectetur adipiscing ullam blandit hendrerit faucibus
                  suspendisse. Dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidi labore et dolore magna aliqua enim ad
                  minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mixer-area2 helping-area2">
        <div className="container">
          <div className="row fun-content-wrap">
            <div className="col-lg-6">
              <div className="fun-content">
                <div className="fun-item fun-item1">
                  <img src="/images/helping-img.jpg" alt="" />
                </div>
                <div className="section-heading">
                  <div className="section-icon">
                    <img src="/images/section-icon.png" alt="section-icon" />
                  </div>
                  <h2 className="section__title">
                    Charity activities are taken place around the world
                  </h2>
                  <p className="section__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes que id
                    erat quis simply free text sollicitud. Lorem ipsum dolor sit
                    not amet, consectetur adipiscing ullam blandit simply free
                    text hendrerit faucibus suspendisse.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="helping-form">
                <div className="section-heading">
                  <div className="section-icon">
                    <img src="/images/section-icon.png" alt="section-icon" />
                  </div>
                  <h2 className="section__title text__white">
                    Make a Donation
                  </h2>
                  <p className="section__meta text__white">donate us now</p>
                </div>
                <div className="form-shared">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Insert Custom Value"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="textarea"
                            name="message"
                            placeholder="Leave a comment"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button className="theme-btn submit__btn">
                          continue now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpingArea;
