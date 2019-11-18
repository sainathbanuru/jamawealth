import React, { Component } from 'react';
import '../css/style.css';


export class Downladebook extends Component {
    render() {
        return (
            <div>
                <div class="jama-ebook-section">
                    <div class="container w-percent-90">
                        <div class="row m-0 valign-wrapper">
                            <div class="col s12 m8">
                                <div class="ebook-section-left">
                                    <h5>Download eBook:</h5>
                                    <h4>"Creating Wealth With Prudence"</h4>
                                </div>
                            </div>

                            <div class="col s12 m4">
                                <div class="Jama-ebook-download-btn">
                                    <a class="waves-effect waves-light btn btn-download-ebook"><i
                                        class="material-icons right">cloud_download</i>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Downladebook


