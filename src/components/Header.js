import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {Modal,Carousel,Button,Image, Navbar} from 'react-bootstrap';
import picA from '../ui/picture1.webp';
import picB from '../ui/picture2.webp';
import picC from '../ui/picture3.webp';
import {connect} from 'react-redux';
import firebase from "firebase/app";
import "firebase/auth";

 export class Logo extends Component {
    render() {
        return (
            <Link className="navbar-brand logo" to="/">
                <img src={require("../ui/logo.png")} />
            </Link>
        );
    }
  }

  


    function SearchAndLocation(state){
     
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
;
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav flex-2 pr-3">
                <li className="input-group input-group-lg location mr-4 flex-1">
                    <div className="input-group-btn">
                        <button className="fas fa-search search-ico"></button>
                    </div>
                    <input type="text" className="form-control" placeholder="Pakistan" />
                    <div className="input-group-btn">
                        <button className="fas fa-chevron-down ico"></button>
                    </div>
                </li>

                <li className="input-group input-group-lg search flex-2">
                    <input type="text" className="form-control" placeholder="Find Cars. Moblie Phones and more..." />
                    <div className="input-group-btn">
                        <button className="fas fa-search ico"></button>
                    </div>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                 <h6 className="mr-sm-2 login" onClick={handleShow}><a to="#">Login</a></h6> 
                <button className="my-2 my-sm-0 fas fa-plus sell">&nbsp;<Link to={"/postad"}>SELL</Link></button>
            </form>





  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
 
        </Modal.Header>
        <Modal.Body>

        <Carousel >
  <Carousel.Item>
      <div className="pic-small">
    <img src={picA}
      className="d-block w-100"
      alt="First slide"
    />
</div>
    <Carousel.Caption className="caro-text">
      <p>Help make OLX safer place to buy and sell</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={picB}
      className="d-block w-100"
      alt="second slide"
    />

    <Carousel.Caption className="caro-text">
      <p>Contact and close deals faster</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src={picC}
      className="d-block w-100"
      alt="Third slide"
    />

    <Carousel.Caption className="caro-text">
      <p>See all your favourite items at one place</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






<Button variant="light login-btn" size="lg" block>
    Continue with phone
  </Button>
  <Button variant="light login-btn" size="lg" block >
    Continue with facebook
  </Button>
  <Button variant="light login-btn" size="lg" block>
    Continue with google
  </Button>
  <Button variant="light login-btn" size="lg" block>
    Continue with email
  </Button>
  
<p className="text">We won't share your personal details with anyone</p>
        </Modal.Body>
    
      </Modal>



        </div>
        );
  
        }


export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Logo />
                <SearchAndLocation />
            </nav>
        );
    }
}




export default SearchAndLocation;
