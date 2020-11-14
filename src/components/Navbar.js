import React, { Component } from 'react';
import {Link} from "react-router-dom"; 

function Navbar() {
    return (
        <div className="container-fluid">

            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main_nav">

                    <ul className="navbar-nav">

                        <li className="nav-item dropdown has-megamenu">
                            <a className="nav-link dropdown-toggle font-weight-bold" href="#" data-toggle="dropdown">ALL CATEGORIES</a>
                            <div className="dropdown-menu megamenu" role="menu">

                                {/* First Row */}

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Mobiles</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Tablets</a></li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Mobile Phones</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Electronics & Home Appliances</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Computer & Accessories</a></li>
                                                <li><a href="#">TV-Video-Audio</a></li>
                                                <li><a href="#">Cameras & Accessories</a></li>
                                                <li><a href="#">Games & Entertainment</a></li>
                                                <li><a href="#">Other Home Appliances</a></li>
                                                <li><a href="#">Generators, UPS & Power Solutions</a></li>
                                                <li><a href="#">Kitchen Appliances</a></li>
                                                <li><a href="#">AC & Coolers</a></li>
                                                <li><a href="#">Fridges & Freezers</a></li>
                                                <li><a href="#">Washing Machines & Dryers</a></li>


                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Jobs</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Online</a></li>
                                                <li><a href="#">Marketing</a></li>
                                                <li><a href="#">Advertising & PR</a></li>
                                                <li><a href="#">Education</a></li>
                                                <li><a href="#">Customer Service</a></li>
                                                <li><a href="#">Sales</a></li>
                                                <li><a href="#">IT & Networking</a></li>
                                                <li><a href="#">Hotels & Tourism</a></li>
                                                <li><a href="#">Clerical & Administration</a></li>
                                                <li><a href="#">Human Resources</a></li>
                                                <li><a href="#">Accounting & Finance</a></li>
                                                <li><a href="#">Manufacturing</a></li>
                                                <li><a href="#">Medical</a></li>
                                                <li><a href="#">Domestic Staff</a></li>
                                                <li><a href="#">Part - Time</a></li>
                                                <li><a href="#">Other Jobs</a></li>


                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Fashion & Beauty</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Clothes</a></li>
                                                <li><a href="#">Footwear</a></li>
                                                <li><a href="#">Jewellery</a></li>
                                                <li><a href="#">Makeup</a></li>
                                                <li><a href="#">Skin & Hair</a></li>
                                                <li><a href="#">Watches</a></li>
                                                <li><a href="#">Wedding</a></li>
                                                <li><a href="#">Lawn & Pret</a></li>
                                                <li><a href="#">Corture</a></li>
                                                <li><a href="#">Other Fashion</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="row mt-4">
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Vehciles</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Cars</a></li>
                                                <li><a href="#">Cars on Installments</a></li>
                                                <li><a href="#">Cars Accessories</a></li>
                                                <li><a href="#">Spare Parts</a></li>
                                                <li><a href="#">Buses, Vans & Trucks</a></li>
                                                <li><a href="#">Rickshaw & Chingchi</a></li>
                                                <li><a href="#">Other Vehciles</a></li>
                                                <li><a href="#">Boats</a></li>
                                                <li><a href="#">Tractors & Trailers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Bikes</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Motorcycles</a></li>
                                                <li><a href="#">Spare Parts</a></li>
                                                <li><a href="#">Bicycles</a></li>
                                                <li><a href="#">ATV & Quads</a></li>
                                                <li><a href="#">Scooters</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Animals</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Fish & Aquariums</a></li>
                                                <li><a href="#">Birds</a></li>
                                                <li><a href="#">Hens & Assels</a></li>
                                                <li><a href="#">Cats</a></li>
                                                <li><a href="#">Dogs</a></li>
                                                <li><a href="#">Livestock</a></li>
                                                <li><a href="#">Horses</a></li>
                                                <li><a href="#">Pet Food & Accessories</a></li>
                                                <li><a href="#">Other Animals</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Books, Sports & Hobbies</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Books & Magazines</a></li>
                                                <li><a href="#">Musical Instruments</a></li>
                                                <li><a href="#">Sports Equipment</a></li>
                                                <li><a href="#">Gym & Fitness</a></li>
                                                <li><a href="#">Other Hobbies</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Third Row */}

                                <div className="row mt-4">
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Property for Sale</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Land & Plots</a></li>
                                                <li><a href="#">Houses</a></li>
                                                <li><a href="#">Apartments & Flats</a></li>
                                                <li><a href="#">Shops - Offices - Commercial Space</a></li>
                                                <li><a href="#">Portions & Floors</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="col-megamenu">
                                            <h6 className="title">Business, Industrial & Agriculture</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Business for Sale</a></li>
                                                <li><a href="#">Food & Restaurants</a></li>
                                                <li><a href="#">Trade & Industrial</a></li>
                                                <li><a href="#">Construction & Heavy Machinery</a></li>
                                                <li><a href="#">Agriculture</a></li>
                                                <li><a href="#">Other Business & Industry</a></li>
                                                <li><a href="#">Medical & Pharma</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Kids</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Kids Furniture</a></li>
                                                <li><a href="#">Toys</a></li>
                                                <li><a href="#">Pharma & Walkers</a></li>
                                                <li><a href="#">Swings & Slides</a></li>
                                                <li><a href="#">Kids Bikes</a></li>
                                                <li><a href="#">Kids Accessories</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Fourth Row */}


                                <div className="row mt-4">
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Property for Rent</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Houses</a></li>
                                                <li><a href="#">Apartments & Flats</a></li>
                                                <li><a href="#">Portions & Floors</a></li>
                                                <li><a href="#">Shops - Offices - Commercial Space</a></li>
                                                <li><a href="#">Roommates & Paying Guests</a></li>
                                                <li><a href="#">Vacation Rentals - Guest Houses</a></li>
                                                <li><a href="#">Land & Plots</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Services</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Education & classNamees</a></li>
                                                <li><a href="#">Travel & Visa</a></li>
                                                <li><a href="#">Car Rental</a></li>
                                                <li><a href="#">Drivers & Taxi</a></li>
                                                <li><a href="#">Web Development</a></li>
                                                <li><a href="#">Electronics & Computer Repair</a></li>
                                                <li><a href="#">Event Services</a></li>
                                                <li><a href="#">Health & Beauty</a></li>
                                                <li><a href="#">Maids & Domestic Help</a></li>
                                                <li><a href="#">Movers & Packers</a></li>
                                                <li><a href="#">Home & Office Repair</a></li>
                                                <li><a href="#">Catering & Restaurant</a></li>
                                                <li><a href="#"> Farm & Fresh Food</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="col-megamenu">
                                            <h6 className="title">Furniture & Home Decor</h6>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Sofa & Chairs</a></li>
                                                <li><a href="#">Beds & Wardrobes</a></li>
                                                <li><a href="#">Home Decoration</a></li>
                                                <li><a href="#">Tables & Dining</a></li>
                                                <li><a href="#">Garden & Outdoor</a></li>
                                                <li><a href="#">Painting & Mirrors</a></li>
                                                <li><a href="#">Rugs & Carpets</a></li>
                                                <li><a href="#">Office Furniture</a></li>
                                                <li><a href="#">Other Household Items</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li>

                        <li className="nav-item"><Link to="/mobilephones" className="nav-link">Mobile Phones</Link></li>
                        <li className="nav-item"><Link to="/cars" className="nav-link"> Cars </Link></li>
                        <li className="nav-item"><Link to="/motorcycles" className="nav-link"> Motorcycles </Link></li>
                        <li className="nav-item"><Link to="/houses" className="nav-link"> Houses </Link></li>
                        <li className="nav-item"><Link to="/tvvideoaudio" className="nav-link"> TV-Video-Audio </Link></li>
                        <li className="nav-item"><Link to="/tablets" className="nav-link"> Tablets </Link></li>
                        <li className="nav-item"><Link to="/landandplots" className="nav-link"> Lands & Plots </Link></li>

                    </ul>


                </div>
            </nav>
        </div>
    );
}

export default Navbar;