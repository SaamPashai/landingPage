import React, { Component } from 'react';
import { Card, 
         CardImg, 
         CardText, 
         CardBody,
         CardTitle,
         CardSubtitle } from 'reactstrap';

class AboutUs extends Component {
    render() {
        return(
            <div id="aboutUsBlock">
                <h1 className="display-2">About Us</h1>
                <br />

                <h2 className="display-4">Team Members</h2>
                <div className="cardContainer">
                    <TeamCards name="Benny Nguyen" job="Back-End Developer" />
                    <TeamCards name="Chris Gerken" job="IT, Communications" />
                    <TeamCards name="Eddy Huang" job="UX &amp; UI Designer" />
                    <TeamCards name="Saam Pashai" job="Full-Stack Developer" />
                </div>
                <br />

                <h2 className="display-4">Sponsor</h2>
                    <div className="cardContainer">
                        <TeamCards name="Seattle Public School District" job="Sponsor" />
                    </div>
                <br />
            </div>
        );
    }
}

class TeamCards extends Component {
    render() {
        let name = this.props.name;
        let job = this.props.job;
        let description = this.props.description;
        return(
            <div>
                <Card>
                    <CardImg top width="100%" src="https://via.placeholder.com/150"/>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>{job}</CardSubtitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AboutUs;