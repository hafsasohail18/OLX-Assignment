import React, { Component } from 'react';

function MoreAccessories() {
    return (
        <div className="container wrapper-card">

            <div>
                <h4 className="alignleft">More Accessories</h4>
                <h6 className="alignright">view more</h6>
                <br className="clear-both"/>
            </div>

            <div className="row">
                <div className="col-md-3 col-sm-6 main-card">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="far fa-heart"></i></h4>
                        <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset" />
                        <h5 className="card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
                        <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 main-card">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="far fa-heart"></i></h4>
                        <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                        <p className="card-text">This is a company that builds websites, web .</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 main-card">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="far fa-heart"></i></h4>
                        <img src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                        <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 main-card">
                    <div className="card card-block">
                        <h4 className="card-title text-right"><i className="far fa-heart"></i></h4>
                        <img src="https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                        <p className="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreAccessories;