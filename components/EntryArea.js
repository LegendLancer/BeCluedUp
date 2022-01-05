import React, { Component } from 'react';

class EntryArea extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <section className="entry-area">
        <div className="container">
          <div className="row entry-static-wrap">
            <div className="col-lg-3">
              <div className="entry-static-box entry-static-box1">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h4 className="entry__title">Hunger is stalking the globe</h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="entry-video-img">
                      <img
                        src="/images/entry-video-img.jpg"
                        alt="entry-video-img"
                      />
                      <div
                        onClick={this.handleModal}
                        className="mfp-iframe video-play-btn"
                        title="Play Video"
                      >
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="entry-video-text">
                      <h4 className="entry__title">
                        We are here to support you every step of the way.
                      </h4>
                      <p className="entry__text">
                        Watch us how we take care of everyone
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EntryArea;
