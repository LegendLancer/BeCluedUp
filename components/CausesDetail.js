import React from 'react';
import Link from 'next/link';

const CausesDetail = () => {
  return (
    <section className="causes-detail-area">
      <div className="container">
        <div className="row blog-content-wrap">
          <div className="col-lg-8">
            <div className="blog-content">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="/images/img12.jpg" alt="" />
                </div>
                <div className="blog-inner-content">
                  <div className="inner-causes-box">
                    <h3 className="blog__title">
                      <Link href="/causes-detail">
                        <a>Save Poor Childrens</a>
                      </Link>
                    </h3>
                    <ul className="blog__list">
                      <li>
                        <i className="icon-target"></i> Goal:{' '}
                        <span>$30,000</span>
                      </li>
                      <li>
                        <i className="fa fa-line-chart"></i> Raised:{' '}
                        <span>25,270</span>
                      </li>
                    </ul>
                  </div>
                  <div className="inner-causes-btn">
                    <Link href="/donate">
                      <a className="theme-btn">donate now</a>
                    </Link>
                  </div>
                </div>
                <div className="blog-inner-content-2">
                  <p className="causes__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <p className="causes__text causes__text2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like.
                  </p>
                  <div className="inner-causes-img-box row">
                    <div className="col-lg-6">
                      <div className="inner-causes-img-item inner-causes-img-item1">
                        <img src="/images/img13.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="inner-causes-img-item inner-causes-img-item2">
                        <img src="/images/img14.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <p className="causes__text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <div className="presentation-block">
                    <h3>
                      <i className="fa fa-file-pdf-o"></i> Our Presentation
                    </h3>
                    <button className="theme-btn" type="button">
                      <i className="fa fa-download"></i> download
                    </button>
                  </div>
                  <div className="single-comment">
                    <div className="comment__boxed">
                      <h3 className="single__comment-title">Comments</h3>
                      <ul className="comments-list">
                        <li>
                          <div className="comment">
                            <div className="avatar-img">
                              <img
                                className="avatar__img"
                                alt=""
                                src="/images/comment-avatar.jpg"
                              />
                            </div>
                            <div className="comment-body">
                              <div className="meta-data">
                                <h4 className="comment__author">
                                  David marks
                                  <span className="comment__date">
                                    3 hours ago
                                  </span>
                                </h4>
                              </div>
                              <div className="comment-content">
                                <a className="reply__btn theme-btn" href="#">
                                  Reply
                                </a>
                                <p className="comment__text">
                                  Sending love. My nephews Nick and Anthony
                                  Salaber are your teammates, so I know the
                                  caliber person you are. Our whole family is
                                  sending our best to you and your family.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="comment">
                            <div className="avatar-img">
                              <img
                                className="avatar__img"
                                alt=""
                                src="/images/comment-avatar2.jpg"
                              />
                            </div>
                            <div className="comment-body">
                              <div className="meta-data">
                                <h4 className="comment__author">
                                  Christine Eve
                                  <span className="comment__date">
                                    4 hours ago
                                  </span>
                                </h4>
                              </div>
                              <div className="comment-content">
                                <a className="reply__btn theme-btn" href="#">
                                  Reply
                                </a>
                                <p className="comment__text">
                                  You're a champ. Your in my thoughts and
                                  prayers every day. You're the best teammate a
                                  bloke could ask for and we're going to return
                                  the favour my being there for you every step
                                  along this journey. Stay strong
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="comment__form form-shared">
                      <h3 className="single__comment-title">Leave a Comment</h3>
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6">
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
                              <textarea
                                className="textarea"
                                name="message"
                                placeholder="Leave a Comment"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button className="theme-btn submit__btn">
                              submit now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-shared">
              <div className="side-widget">
                <div className="author-box">
                  <div className="author__avatar">
                    <img src="/images/author-avatar.jpg" alt="" />
                  </div>
                  <div className="author__detail">
                    <span className="author__meta">created april 11, 2018</span>
                    <h4 className="author__title">
                      Organizer: <a href="#">Jessica Smith</a>
                    </h4>
                    <ul className="author__list">
                      <li>
                        <i className="fa fa-tag"></i> Education
                      </li>
                      <li>
                        <i className="fa fa-map-marker"></i> Wrightwood, Canada
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="side-widget">
                <h2 className="widget__title">Recent Donations</h2>
                <div className="author-box recent-donate-item">
                  <div className="author__avatar">
                    <img src="/images/author-avatar2.jpg" alt="" />
                  </div>
                  <div className="author__detail">
                    <span className="author__meta2">$20</span>
                    <h4 className="author__title author__title2">
                      David Marks <span>3 hours ago</span>
                    </h4>
                    <ul className="author__list">
                      <li>God bless you dear</li>
                    </ul>
                  </div>
                </div>
                <div className="author-box recent-donate-item">
                  <div className="author__avatar">
                    <img src="/images/author-avatar3.jpg" alt="" />
                  </div>
                  <div className="author__detail">
                    <span className="author__meta2">$35</span>
                    <h4 className="author__title author__title2">
                      Jean Jerome <span>10 hours ago</span>
                    </h4>
                    <ul className="author__list">
                      <li>My prayers are with you</li>
                    </ul>
                  </div>
                </div>
                <div className="author-box recent-donate-item">
                  <div className="author__avatar"></div>
                  <div className="author__detail">
                    <span className="author__meta2">$35</span>
                    <h4 className="author__title author__title2">
                      Anonymous <span>20 hours ago</span>
                    </h4>
                  </div>
                </div>
                <div className="author-box recent-donate-item">
                  <div className="author__avatar">
                    <img src="/images/author-avatar4.jpg" alt="" />
                  </div>
                  <div className="author__detail">
                    <span className="author__meta2">$160</span>
                    <h4 className="author__title author__title2">
                      Kistin Eve <span>1 day ago</span>
                    </h4>
                    <ul className="author__list">
                      <li>Wishing you blessings</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="side-widget">
                <h2 className="widget__title">Share Cause</h2>
                <div className="side-share-profile">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
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

export default CausesDetail;
