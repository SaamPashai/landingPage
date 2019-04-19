import React, { Component } from 'react';

class Mission extends Component {
    render() {
        return (
            <div id="missionBlock">
                <div>
                    <h1 className="display-2">Our Mission</h1>
                    <p>
                        In this modern era, technology is being introduced earlier and earlier to
                        students. Thus, Seattle Public School (SPS) District's IT team plays a large role
                        in the integration of tech for this youth. However, the current toolset used
                        for project management, ticket retrieval, and communication is archaic and severely
                        limited. Therefore, we aim to improve upon this system by creating a project management
                        dashboard catering to ITs in SPS that can filter data by each school they visit.
                    </p>
                </div>
            </div>
        );
    }
}

export default Mission;