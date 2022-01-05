import React from 'react';

const GiveArea = () => {
  return (
    <section className="give-area skill-area">
      <div className="container-fluid">
        <div className="row give-static-wrap">
          <div className="col-lg-3">
            <div className="give-title-box section-heading">
              <h2 className="give__title section__title text__white">
                Urgent Help Needed <br /> Now
              </h2>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="give-progress-box">
              <div className="skill-item">
                <div className="skills">
                  <div className="skill">
                    <h2 className="skill__title">$7860</h2>
                    <span>54%</span>
                    <div className="progress_bg">
                      <div className="progress_bar"></div>
                    </div>
                    <div className="skill-meta">
                      <ul>
                        <li>of $30,000 goal</li>
                        <li>Raised by 20 donors</li>
                      </ul>
                    </div>
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

export default GiveArea;
