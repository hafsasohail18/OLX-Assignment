import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../pages/Home";
import MobilePhones from "../pages/MobilePhones";
import Cars from "../pages/Cars";
import Houses from "../pages/Houses";
import LandAndPlots from "../pages/LandAndPlots";
import Motorcycles from "../pages/Motorcycles";
import Tablets from "../pages/Tablets";
import TvVideoAudio from "../pages/TV-Video-Audio";
import PostAd from "../components/PostAd";
import AdDetail from '../pages/AdDetail';



class AppRouter extends Component {
  render() {
    return ( 
      <div>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/mobilephones' component={MobilePhones} />
          <Route exact path='/cars' component={Cars} />
          <Route exact path='/houses' component={Houses} />
          <Route exact path='/landandplots' component={LandAndPlots} />
          <Route exact path='/motorcycles' component={Motorcycles} />
          <Route exact path='/tablets' component={Tablets} />
          <Route exact path='/tvvideoaudio' component={TvVideoAudio} />
          <Route exact path='/postad' component={PostAd} />
          <Route exact path='/AdDetail' component={AdDetail} />
    
        
          
        </Router>

      </div>
    );
  }
}

export default AppRouter;