import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div id="footerBlock">
                <h1>Contact Us</h1>
                <p>
                    This project management tool can be beneficial to more than just SPS, including startups,
                    businesses, and others who need more organization in their life! If you're interested in 
                    our project management tool and wish to implement this in your project, contact us at the links below!
                </p>

                <div id="socialMediaContainer">
                    <a href="https://www.facebook.com/groups/info.uw/"><i class="fa fa-facebook-f fa-3x" aria-hidden="true"></i></a>
                    <a href="mailto:bennyn@uw.edu"><i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i></a>
                </div>
            </div>
        );
    }
}

export default Footer;