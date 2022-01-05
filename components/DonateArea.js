import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class DonateArea extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false,
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <div>
        <div className="section-divider"></div>
        <section className="donate-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="donate-item-img">
                  <figure>
                    <img src="/images/donate-img.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="donate-item-content">
                  <div className="section-heading">
                    <div className="section-icon">
                      <img src="/images/section-icon.png" alt="section-icon" />
                    </div>
                    <h2 className="section__title">
                      Pure Education for Childrens
                    </h2>
                    <p className="section__desc">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of lorem ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="donate-fun-wrap">
                <div className="fun-content">
                  <div className="fun-item fun-item1">
                    <i className=" icon-charity"></i>
                    <h3 className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 76012 : 0} />
                      </VisibilitySensor>
                    </h3>
                    <p className="fun__text">
                      raised by 6,388 people in 7 days
                    </p>
                  </div>
                </div>
                <div className="fun-content">
                  <div className="fun-item fun-item2">
                    <i className=" icon-cancer"></i>
                    <h3 className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 6310 : 0} />
                      </VisibilitySensor>
                    </h3>
                    <p className="fun__text">
                      volunteer are available to help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DonateArea;
