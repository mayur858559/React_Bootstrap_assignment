import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      
      <Navbar default collapseOnSelect className='maindiv'>
        <div className='row bg_black'>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className='padleft' to="">Sign Up</Link>
            <Link className='padleft' to="">Login</Link>
            <Link className='padleft' to="">RSS Feeds</Link>
            <Link className='padleft10'  to="">Arcvived News</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        </div>
        <div className='row secndndrow'>
        <Nav >
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home Page
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="" to="">
              Style Demo
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="" to="">
              Full Width
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="" to="">
              Dropdown
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="" to="">
              Gallery
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="" to="">
              Protfolio
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="" to="">
              Linktext
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="" to="">
              Long Linktext
            </NavItem>
          </Nav>
          </div>
      </Navbar>
    )
  }
}
