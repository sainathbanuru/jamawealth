import React, { Component } from 'react';
import '../css/style.css';
import '../css/about.css';
import { Link } from "react-router-dom";
import leftarrow from '../assets/left-arrow.svg';
import startwealthcreation from '../assets/startwealthcreation.svg';
import undraw_visual_data_big from '../assets/undraw_visual_data_big.svg';
import Footer from './Footer';
import Header from './Header';
import Downladebook from './Downladebook';




export class BuildWealthprudenceinfo extends Component {
    render() {
        return (
            <div>
                <Header />

                <div class="jars-section">
                    <div class="row">
                        <div class="container-fluid back-btn-section-row w-percent-90 m-auto">
                            <Link to="/"> <img class=" responsive-img" src={leftarrow} /></Link>
                        </div>
                    </div>

                    <div class="container how-jama-works-content w-percent-90">
                        <div class="row valign-wrapper">
                            <div class="col s12 m12 push-m6">
                                <div class="Aboutus-img-right right-align">
                                    <img class=" responsive-img" src={undraw_visual_data_big} />
                                </div>
                            </div>
                            <div class="col s12 m12 pull-m6">
                                <div class="about-philosophy-left-content">
                                    <h4>Preserve & Prosper</h4>
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

                <div class=" research-invest-section ">
                    <div class=" row ">
                        <div class=" col s12 m6 offset-m3 ">
                            <div class=" research-invest-section-content ">
                                <h4>Don't fall behind your goals <br></br>It's time to invest for your better future </h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley
                                        of type and scrambled it to make a type specimen book</p>
                                <div class=" research-invest-btn-section ">
                                    <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">Contact Advisor</a>
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

export default BuildWealthprudenceinfo


