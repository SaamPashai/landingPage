import React, { Component } from 'react';
import product from './img/product.png';

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
                                    Efficently keep track of tasks that arise throughout the workday.
                                </p >
                            </div>
                            <div>
                                <img src={product} alt="product" height="400" width="900" id="round"></img>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default TitleBlock;