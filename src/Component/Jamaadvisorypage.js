import React, { Component } from 'react';
import '../css/style.css';
import '../css/jamaadvisorypage.css';
import { Link } from "react-router-dom";
import leftarrow from '../assets/left-arrow.svg';
import jamaadvisory from '../assets/jamaadvisory.png';
import keystatsimg from '../assets/keystatsimg.jpg';
import howweperformimg from '../assets/howweperformimg.jpg';
import OurModelPortfolio from '../assets/OurModelPortfolio.jpg';
import Footer from './Footer';
import Header from './Header';
import WOW from 'wowjs';




export class Jamaadvisorypage extends Component {
    componentDidMount() {
        new WOW.WOW().init();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header />

                <div class="jars-section">
                    <div class="container jama-advisory-toprow w-percent-90">
                        <div class="row valign-wrapper">
                            <div class="col s12 m12 push-m6">
                                <div class="jamadvisory-img-right wow fadeInUp" data-wow-delay="0.1s">
                                    <img class=" responsive-img" src={jamaadvisory} />
                                </div>
                            </div>
                            <div class="col s12 m12 pull-m6">
                                <div class="jamaadvisory-left-content wow fadeInUp" data-wow-delay="0.4s">
                                    <h4><b>J</b>ama <b>A</b>dvisory & <b>R</b>esearch on <b>S</b>tocks <b>(JARS)</b> </h4>
                                    <p>Lorem ipsum dolor sit amet, quod deserunt intellegam nam in, cum no atqui definiebas. Ex nam
                                        error recteque. Eam cu rebum phaedrum lobortis. quod deserunt intellegam nam in, Eam labitur
                            nominavi suscipiantur eu. </p>
                                    <p>Lorem ipsum dolor sit amet, quod deserunt intellegam nam in, cum no atqui definiebas. quod
                            deserunt intellegam nam cum no atqui definiebas. quod deserunt intellegam nam </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="clean-safe-model-section-row">
                    <div class="clean-section-text">
                        <h5>CLEAN & SAFE MODEL</h5>
                    </div>
                    <div class="clean-section-list-content-section">
                        <div class="container clean-section-list w-percent-90">
                            <div class="row m-0">
                                <div class="col m4 list-text">
                                    <li>We don't touch client money</li>
                                    <li>No costody of stocks / units / cash</li>
                                </div>
                                <div class="col m4 list-text">
                                    <li>We don't touch client money</li>
                                    <li>No costody of stocks / units / cash</li>
                                </div>
                                <div class="col m4 list-text">
                                    <li>We don't touch client money</li>
                                    <li>No costody of stocks / units / cash</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" research-invest-section ">
                    <div class=" row ">
                        <div class="col s12 m8 l6 offset-m2 offset-l3 key-statics-section">
                            <div class="Key-strength-title">
                                <h4>Key Statistics</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        of type and scrambled it to make a type specimen book Lorem
                                        </p>
                                <div class="jama-key-stats-img wow fadeInUp">
                                    <img class=" responsive-img" src={keystatsimg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="jars-section-portfolio">
                    <div class="container w-percent-90">
                        <div class="row valign-wrapper">
                            <div class="col s12 m12 push-m6">
                                <div class="jama-advice-how-we-perform-img wow fadeInUp" data-wow-delay="0.1s">
                                    <img src={howweperformimg} />
                                </div>
                            </div>
                            <div class="col s12 m12 pull-m6">
                                <div class="Jars-section-left wow fadeInUp" data-wow-delay="0.4s">
                                    <h4>How we performed over the years</h4>
                                    <p class="no-padding">Over the Financial years of 2010-2019, if you did investment <br></br> of <span class="bold-text"> &#x20b9; 1crore</span> Jamā returns would be as high as <span class="bold-text"> &#x20b9; 13.29 crore.</span> </p>
                                    <p><span class="blue-text">JARS CAGR:</span> 29.53% p.a.</p>
                                    <div class="jars-btns text-white-btn">
                                        <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">Contact Advisor</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="jars-section-portfolio">
                    <div class="container w-percent-90">
                        <div class="row valign-wrapper">
                            <div class="col s12 m6">
                                <div class="jama-advice-how-we-perform-img wow fadeInUp" data-wow-delay="0.4s">
                                    <img src={OurModelPortfolio} />
                                </div>
                            </div>

                            <div class="col s12 m6">
                                <div class="Jars-section-left wow fadeInUp" data-wow-delay="0.4s">
                                    <h4>Our Model Portfolio</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem of type and scrambled it to make a type specimen book Lorem</p>
                                    <div class="jars-btns text-white-btn">
                                        <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">Contact Advisor</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <Footer />

            </div >
        )
    }
}

export default Jamaadvisorypage


