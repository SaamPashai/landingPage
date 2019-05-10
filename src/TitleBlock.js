import React, { Component } from 'react';
import product from './img/active.png';
import phone from './img/phone.png';

class TitleBlock extends Component {
    render() {
        return (
            <div>
                <div id="titleBlock">
                    <header>
                        <h1 className="display-3">Task Management for Seattle Public Schools</h1>
                        <h3 id="subHead"><em>a collective effort to increase efficiency</em></h3>
                        <div className="flex-container" id="center">
                            {/* <div>
                                <p id="product-description">
                                    Mobile platform supported where information displayed will follow the same encrypted back-end.
                                </p >
                            </div> */}
                            <div id="phone">

                                <img src={phone} alt="phone" height="420" width="425" id="round"></img>
                                <p id="product-description2">
                                    Mobile platform supported where information displayed will follow the same encrypted back-end.
                                </p >
                            </div>
                            {/* <div>
                                <p id="product-description">
                                    A tool to efficently keep track of those trivial tasks that arise throughout the workday.
                                </p >
                            </div> */}
                            <div>
                                <p id="product-description">
                                    A tool to efficently keep track of those trivial tasks that arise throughout the workday.
                                </p >
                                <img src={product} alt="product" height="400" width="700" id="round" className="comp"></img>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default TitleBlock;