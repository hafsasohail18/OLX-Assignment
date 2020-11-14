import React, { Component } from 'react';
import {Header, Logo, SearchAndLocation} from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import FreshRecommendation from "../components/FreshRecommendation";
import MoreAccessories from "../components/MoreAccessories";
import MobileApp from '../components/OlxApp';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Navbar></Navbar>
                <Slider></Slider>
                <MoreAccessories></MoreAccessories>
                <FreshRecommendation></FreshRecommendation>
                <br/>
                <MobileApp></MobileApp>
                <Footer></Footer>
                
            </div>
        );
    }
}

export default Home;