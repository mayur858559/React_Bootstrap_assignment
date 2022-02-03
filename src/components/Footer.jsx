import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './CustomNavbar.css'


class Footer extends Component {
    render() {
        return (
            <div className=''>
                <div className='container footer'>
                    <Col xs={12} sm={3} className="sidebar-section aboutus">
                        <h5>ABOUT US</h5>
                        <Col xs={12} sm={12} className="sidebar-section">
                            <Image src="assets/215_90.jpg" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque. Quisque non luctus sem. Nullam non magna vel nisi posuere bibendum vitae sed dui.</p>
                            <h5><a href="#">Read More ></a></h5>
                        </Col>
                    </Col>
                    <Col xs={12} sm={3} className="sidebar-section quicklink">
                        <h5>QUICK LINK</h5>
                        <p>></p>
                        <p>></p>
                        <p>></p>
                        <p>></p>
                        <p>></p>
                        <p>></p>
                        <p>></p>
                        <p>></p>
                        <p>></p>
                        <p>></p>
                    </Col>
                    <Col xs={12} sm={3} className="sidebar-section letestpost">
                        <h5>LETEST BLOG POSTS</h5>
                        <span><strong>Post Title</strong></span><br></br>
                        <span>admin,domainname.com friday, 6th april 2000 </span><br></br>
                        <span>admin,domainname.com friday, 6th april 2000 <h5><a href="#">Read More ></a></h5></span><br></br>
                        <h5>LETEST BLOG POSTS</h5>
                        <span>admin,domainname.com friday, 6th april 2000 </span>
                        <span>admin,domainname.com friday, 6th april 2000 <h5><a href="#">Read More ></a></h5></span><br></br>
                    </Col>
                    <Col xs={12} sm={3} className="sidebar-section contactfooter">
                        <h5>CONTACT US</h5>
                        <p><form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Subject" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Massage"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form></p>
                    </Col>

                </div>
                
                <div className='container footercopy'>
                        <Col xs={12} sm={6} className="">
                            Copyright 2013 Domain Name - Allrights Reserved

                        </Col>
                        <Col xs={12} sm={6} className="footndcolm">
                            Template By OS Template
                        </Col>
                    </div>
            </div>
        );
    }
}

export default Footer;