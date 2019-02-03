import React, { Component } from 'react';

class TitleBlock extends Component {
    render() {
        return (
            <div>
                <div id="titleBlock">
                    <header>
                        <h1 className="display-3">Project Management for Seattle Public Schools</h1>
                        <h3><em>a collective effort to increase efficiency</em></h3>
                    </header>
                </div>
            </div>
        );
    }
}

export default TitleBlock;