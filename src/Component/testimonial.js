import React, { Component } from 'react';
import '../css/style.css';
import '../css/testimonial.css';
import profile from '../assets/profile.PNG';
import Footer from './Footer';
import Header from './Header';
import WOW from 'wowjs';




export class testimonial extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header />

                <div class="jama-testimonials-section testimonal-bg">
                    <div class="container w-percent-90">
                        <div class="jars-section-title-heading">
                            <h4 class="testimonials-heading-title">Testimonials</h4>
                        </div>
                        <div class="row m-0">
                            <div class="col s12 m6">
                                <div class="testimonials-cards wow fadeIn">
                                    <div class="Testimonial-profile">
                                        <div class="row valign-wrapper testimonial-section-profile-details">
                                            <div class="testimonial-pic-section">
                                                <img class="profile-pic" src={profile} />
                                            </div>

                                            <div class="testimonial-text">
                                                <h6>Pam Beesly</h6>
                                                <p class="m-0">since 2011</p>
                                            </div>

                                        </div>
                                        <div class="testimonial-description">
                                            <h6>The best of the best..</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 m6">
                                <div class="testimonials-cards wow fadeIn">
                                    <div class="Testimonial-profile">
                                        <div class="row valign-wrapper testimonial-section-profile-details">
                                            <div class="testimonial-pic-section">
                                                <img class="profile-pic" src={profile} />
                                            </div>

                                            <div class="testimonial-text">
                                                <h6>Pam Beesly</h6>
                                                <p class="m-0">since 2011</p>
                                            </div>

                                        </div>
                                        <div class="testimonial-description">
                                            <h6>The best of the best..</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 m6">
                                <div class="testimonials-cards wow fadeIn">
                                    <div class="Testimonial-profile">
                                        <div class="row valign-wrapper testimonial-section-profile-details">
                                            <div class="testimonial-pic-section">
                                                <img class="profile-pic" src={profile} />
                                            </div>

                                            <div class="testimonial-text">
                                                <h6>Pam Beesly</h6>
                                                <p class="m-0">since 2011</p>
                                            </div>

                                        </div>
                                        <div class="testimonial-description">
                                            <h6>The best of the best..</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 m6">
                                <div class="testimonials-cards wow fadeIn">
                                    <div class="Testimonial-profile">
                                        <div class="row valign-wrapper testimonial-section-profile-details">
                                            <div class="testimonial-pic-section">
                                                <img class="profile-pic" src={profile} />
                                            </div>

                                            <div class="testimonial-text">
                                                <h6>Pam Beesly</h6>
                                                <p class="m-0">since 2011</p>
                                            </div>

                                        </div>
                                        <div class="testimonial-description">
                                            <h6>The best of the best..</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col s12 m6">
                                <div class="testimonials-cards wow fadeIn">
                                    <div class="Testimonial-profile">
                                        <div class="row valign-wrapper testimonial-section-profile-details">
                                            <div class="testimonial-pic-section">
                                                <img class="profile-pic" src={profile} />
                                            </div>

                                            <div class="testimonial-text">
                                                <h6>Pam Beesly</h6>
                                                <p class="m-0">since 2011</p>
                                            </div>

                                        </div>
                                        <div class="testimonial-description">
                                            <h6>The best of the best..</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 m6">
                                <div class="testimonials-cards wow fadeIn">
                                    <div class="Testimonial-profile">
                                        <div class="row valign-wrapper testimonial-section-profile-details">
                                            <div class="testimonial-pic-section">
                                                <img class="profile-pic" src={profile} />
                                            </div>

                                            <div class="testimonial-text">
                                                <h6>Pam Beesly</h6>
                                                <p class="m-0">since 2011</p>
                                            </div>

                                        </div>
                                        <div class="testimonial-description">
                                            <h6>The best of the best..</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="load-more-btn ">
                            <button class="btn waves-effect waves-light center testimonial-load-more-btn" type="submit" name="action">Load More
                </button>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default testimonial


