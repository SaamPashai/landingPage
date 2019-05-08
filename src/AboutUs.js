import React, { Component } from 'react';
import { Card, 
         CardImg, 
         CardText, 
         CardBody,
         CardTitle,
         CardSubtitle } from 'reactstrap';

import benny from './img/benny.jpg';
import chris from './img/chris.jpg';
import eddy from './img/eddy.jpg';
import saam from './img/saam.jpg';
import spslogo2 from './img/spslogo2.png';

class AboutUs extends Component {
    render() {
        return(
            <div id="aboutUsBlock">
                <h1 className="display-2">About Us</h1>
                <br />

                <h2 className="display-4">Team Members</h2>
                <div className="cardContainer">
                    <TeamCards name="Benny Nguyen" job="Back-End Developer" imgSrc={benny} />
                    <TeamCards name="Chris Gerken" job="PM and UX Researcher" imgSrc={chris} />
                    <TeamCards name="Eddy Huang" job="Designer" imgSrc={eddy} />
                    <TeamCards name="Saam Pashai" job="Full-Stack Developer" imgSrc={saam} />
                </div>
                <br />

                <h2 className="display-4">Sponsor</h2>
                    <div className="cardContainer" id="spsTitle">
                        <TeamCards imgSrc={spslogo2} />
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
        let imgSrc = this.props.imgSrc;
        return(
            <Card>
                <CardImg top width="100%" src={imgSrc}/>
                <CardBody>
                    <CardText>{name}</CardText>
                    <CardText id="lined">{job}</CardText>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default AboutUs;