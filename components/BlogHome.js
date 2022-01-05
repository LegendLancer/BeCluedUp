import React from 'react';

const BlogHome = () => {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-heading blog-heading">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title">Recent Blog Posts</h2>
              <p className="section__meta">news and updates</p>
            </div>
          </div>
        </div>
        <div className="row recent-post-wrap">
          <div className="col-lg-6">
            <div className="recent-item">
              <div className="recent__img">
                <span className="meta__date-date">09 mar, 2019</span>
                <img src="/images/blog-img.jpg" alt="service-image" />
              </div>
              <div className="news__content">
                <h3 className="news__content-title">
                  <a href="/single-news">
                    A place where start new life with peace
                  </a>
                </h3>
                <ul className="news__content-list">
                  <li className="news__content-active__dot">
                    <a href="#">mike hardson</a>
                  </li>
                  <li>
                    <a href="#">3 comments</a>
                  </li>
                </ul>
                <p className="news__content-text">
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse.
                </p>
                <a href="single-news" className="theme-btn">
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="third-recent-box">
              <ul className="third-recent-item">
                <li>
                  <div className="recent__img">
                    <a href="/single-news">
                      <img src="/images/blog-img2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>07 mar, 2019</span>
                    <h4>
                      <a href="single-news.html">
                        Let’s together provide them a healthy food
                      </a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="recent__img">
                    <a href="/single-news">
                      <img src="images/blog-img3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>04 mar, 2019</span>
                    <h4>
                      <a href="/single-news">
                        Building clean water system for poor
                      </a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="recent__img">
                    <a href="/single-news">
                      <img src="/images/blog-img4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="recent__content">
                    <span>30 feb, 2019</span>
                    <h4>
                      <a href="single-news.html">
                        Become a volunteer you will feel the benefits{' '}
                      </a>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
