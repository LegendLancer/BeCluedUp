import React, { Component } from 'react';

class MixerAreaThree extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <section className="mixer-area mixer-area3 mixer-area4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h2 className="section__title text__white">
                  We Make a Difference in their Life
                </h2>
                <p className="section__meta">news and updates</p>
                <p className="section__desc text__white">
                  Tincidunt elit magnis nulla facilisis sagittis is maecenas.
                  Sapien nunced amet ultrices, dolores sit ipsum velit purus
                  aliquet, massa fringilla leo orci.
                </p>
                <a href="#" className="theme-btn">
                  learn more
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mixer-video-content">
                <img src="/images/mixer-img.jpg" alt="" />
                <div
                  onClick={this.openModal}
                  className="mfp-iframe video-play-btn"
                  title="Play Video"
                >
                  <i className="fa fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MixerAreaThree;
