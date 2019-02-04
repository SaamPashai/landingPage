import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div id="footerBlock">
                <h1>Contact Us</h1>
                <p>If you're interested in our project management tool and wish to implement this
                   in your project, contact us at the links below!
                </p>

                <div id="socialMediaContainer">
                    <i class="fa fa-facebook-f fa-3x" aria-hidden="true"></i>
                    <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
                    <a href="mailto:bennyn@uw.edu"><i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i></a>
                </div>
            </div>
        );
    }
}

export default Footer;