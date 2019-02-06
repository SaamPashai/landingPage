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
                    <TeamCards name="Benny Nguyen" job="Back-End Developer" imgSrc="/img/benny.jpg" />
                    <TeamCards name="Chris Gerken" job="IT, Communications" imgSrc="/img/chris.jpg" />
                    <TeamCards name="Eddy Huang" job="UX &amp; UI Designer" imgSrc="/img/eddy.jpg" />
                    <TeamCards name="Saam Pashai" job="Full-Stack Developer" imgSrc="https://via.placeholder.com/150" />
                </div>
                <br />

                <h2 className="display-4">Sponsor</h2>
                    <div className="cardContainer">
                        <TeamCards name="Seattle Public School District" job="Sponsor" imgSrc="https://via.placeholder.com/150" />
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
            <div>
                <Card>
                    <CardImg top width="100%" src={imgSrc}/>
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