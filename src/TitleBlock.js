import React, { Component } from 'react';
import product from './img/active.png';

class TitleBlock extends Component {
    render() {
        return (
            <div>
                <div id="titleBlock">
                    <header>
                        <h1 className="display-3">Task Management for Seattle Public Schools</h1>
                        <h3><em>a collective effort to increase efficiency</em></h3>
                        <div className = "flex-container"id="center">
                            <div>
                                <p id="product-description">
                                    A tool to efficently keep track of those trivial tasks that arise throughout the workday.
                                </p >
                            </div>
                            <div>
                                <img src={product} alt="product" height="600" width="700" id="round"></img>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default TitleBlock;