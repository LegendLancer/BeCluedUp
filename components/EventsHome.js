import React from 'react';

const EventsHome = () => {
  return (
    <section className="causes-area upcoming-event-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading blog-heading text-center">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title">Upcoming Events</h2>
              <p className="section__meta">help us now</p>
            </div>
          </div>
        </div>
        <div className="row blog-content-wrap">
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item1">
                <div className="blog-img">
                  <img src="/images/img7.jpg" alt="" />
                  <span className="blog__tag blog__tag1">
                    <span className="date__num-text">6</span>
                    <span className="date__mon-text">may</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <a href="/events-detail">Save the planets</a>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item2">
                <div className="blog-img">
                  <img src="/images/img8.jpg" alt="" />
                  <span className="blog__tag blog__tag2">
                    <span className="date__num-text">9</span>
                    <span className="date__mon-text">mar</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <a href="/events-detail">Play for the world</a>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item3">
                <div className="blog-img">
                  <img src="/images/img9.jpg" alt="" />
                  <span className="blog__tag blog__tag3">
                    <span className="date__num-text">4</span>
                    <span className="date__mon-text">mar</span>
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <a href="/events-detail">Water for charity</a>
                  </h3>
                  <ul className="blog__list">
                    <li className="blog__dot-active">8:00am to 2:00pm</li>
                    <li>San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsHome;
