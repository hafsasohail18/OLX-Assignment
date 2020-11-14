import React, { Component } from 'react';
import { Link } from "react-router-dom";


class PhoneLogo extends Component {
    render() {
        return (
            <a className="navbar-brand Phone-logo" href="#">
                <img src={require("../ui/phone-app.webp")} />
            </a>
        );
    }
}

class Text extends Component {
    render() {
        return (
            <div className="text-style">
            <h2>TRY THE OLX APP</h2>
            <p>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>

        )
    }
}
class AppLogo extends Component{
    render(){
        return (
            <div className="image-inline">
            <a className="navbar-brand App-logo" href="#">
                <img src={require("../ui/playstore.webp")} />
            </a>
            <a className="navbar-brand App-logo" href="#">
            <img src={require("../ui/appstore.webp")} />
        </a>
        </div>
        );
    }
}


class AppToday extends Component {
    render() {
        return (
            <div className="app-inline">
                <h5>GET YOUR APP TODAY</h5>
                <AppLogo></AppLogo>
            </div>
        )
    }
}




class MobileApp extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="app-style">
                <PhoneLogo />
                <Text></Text>
                <AppToday></AppToday>
        
            
            </div>
            </nav>
        )
    }
}

export default MobileApp ;