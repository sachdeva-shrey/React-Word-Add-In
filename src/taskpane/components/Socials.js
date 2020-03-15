import * as React from "react";
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class Socials extends React.Component {
    render() {
        const iconStyle = { 
            fontSize: '40px',
            marginTop: '30px',
            marginLeft: '40px',
        };
        return(
            <div>     
                <h2 style={{ marginLeft: '20px' }} className="ms-fontWeight-regular">Check out my socials at</h2>
                <a href="www.google.com"><Icon style={iconStyle} iconName="LinkedInLogo" className="ms-IconExample" /></a>
                <a href="www.google.com"><Icon style={iconStyle} iconName="SkypeLogo" className="ms-IconExample" /> </a>
                <a href="www.google.com"><Icon style={iconStyle} iconName="World" className="ms-IconExample" /> </a>
            </div>
        );
    };
};
