import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='homedive'>
      <Grid>
        <Jumbotron>
          <div className='row'>
            <div className='nobadyfool'>
          <h2>NobodysFool</h2>
          <p>Free PSD Website Template</p>
          </div>
          <div className='searchbtn'>
          <Link to="">
            
            <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search Our Website" aria-label="Search Our Website" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><Button bsStyle="primary">Search</Button></span>
  </div>
</div>
          </Link>
          </div>
          </div>
        </Jumbotron>
        <Row className="show-grid text-center slideshow">
          <Col xs={12} sm={5} className="person-wrapper mrgtop12">
            <h3>Your title can be long and descriptive</h3>
            <p>Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur.</p>
            <span class="input-group-text" id="basic-addon2"><Button bsStyle="primary">Read More >></Button></span>
          </Col>
          <Col xs={12} sm={7} className="person-wrapper slideshocese">
            <Image src="assets/slideshow.jpg" />      
          </Col>
        </Row>
        <Row className="show-grid text-center mobilescreen">
          <Col xs={12} sm={6} className="person-wrapper">
          <Image src="assets/tv.jpg" />   
          </Col>
          <Col xs={12} sm={6} className="person-wrapper">
          <div>
        <Grid>
          <Row>
          <Col xs={12} sm={6} className="sidebar-section">
              <Image src="assets/85_80.jpg" />
              <h5>Vivamuslibero Augue</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
            </Col>
            <Col xs={12} sm={6} className="sidebar-section">
              <Image src="assets/85_80.jpg" />
              <h5>Vivamuslibero Augue</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
            </Col>
          </Row>
          <Row>
          <Col xs={12} sm={6} className="sidebar-section">
              <Image src="assets/85_80.jpg" />
              <h5>Vivamuslibero Augue</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
            </Col>
            <Col xs={12} sm={6} className="sidebar-section">
              <Image src="assets/85_80.jpg" />
              <h5>Vivamuslibero Augue</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
            </Col>
          </Row>
        </Grid>
      </div>
            
          </Col>
        </Row>
        <div className='container contactus'>
        <Col xs={12} sm={9} className="sidebar-section">
          <h1>Lorem ipsum dolor sit amet elit!</h1>
          <p>Why not try our services today, you wont regret your choice!</p>
        </Col>
        <Col xs={12} sm={3} className="sidebar-section">
        <span class="input-group-text contactusbtn" id="basic-addon2"> <Button bsStyle="primary">CONTACT US TODAY</Button></span>
        </Col>
        </div>
      </Grid>
      </div>
    )
  }
}
