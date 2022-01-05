import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class MixerArea extends Component {
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
        <section className="mixer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-heading mixer-heading">
                  <div className="section-icon">
                    <img src="/images/section-icon.png" alt="section-icon" />
                  </div>
                  <h2 className="section__title text__white">
                    Fundraising for the people and causes you care about
                  </h2>
                  <a href="/donate" className="theme-btn">
                    start donation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mixer-area2">
          <div className="container">
            <div className="row fun-content-wrap">
              <div className="col-lg-6">
                <div className="fun-content">
                  <div className="fun-item fun-item1">
                    <i className="icon-charity"></i>
                    <h3 className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 785000 : 0} />
                      </VisibilitySensor>
                    </h3>
                    <p className="fun__text">
                      raised by 6,388 people in 7 days
                    </p>
                  </div>
                </div>
                <div className="fun-content">
                  <div className="fun-item fun-item2">
                    <i className="icon-cancer"></i>
                    <h3 className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 63000 : 0} />
                      </VisibilitySensor>
                    </h3>
                    <p className="fun__text">
                      volunteer are available to help you
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="fun-content-slide">
                  <Swiper>
                    <div className="fun-slide-item">
                      <div className="icon-quote">“</div>
                      <h3 className="funslide__text">
                        Every man must decide whether he will walk in the light
                        of creative altruism or in the darkness of destructive
                        selfishness.
                      </h3>
                      <p className="funslide__name">Martin Luther King, jr</p>
                    </div>
                    <div className="fun-slide-item">
                      <div className="icon-quote">“</div>
                      <h3 className="funslide__text">
                        Every man must decide whether he will walk in the light
                        of creative altruism or in the darkness of destructive
                        selfishness.
                      </h3>
                      <p className="funslide__name">Martin Luther King, jr</p>
                    </div>
                    <div className="fun-slide-item">
                      <div className="icon-quote">“</div>
                      <h3 className="funslide__text">
                        Every man must decide whether he will walk in the light
                        of creative altruism or in the darkness of destructive
                        selfishness.
                      </h3>
                      <p className="funslide__name">Martin Luther King, jr</p>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MixerArea;
