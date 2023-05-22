import React from 'react';
import"./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  
  const NavlinkStyle=({isActive})=>{
    return {
       textDecoration:isActive ? "underline":"none"
    
    }
  }

    return (
        <Navbar  collapseOnSelect expand="lg" bg="light" variant="light" className='navbar sticky-top'>
        <Container>
          <NavLink className="title" to="#">QUIZ CRACKERS</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className='link'>
              <NavLink style={NavlinkStyle} to="/topics">Topics</NavLink>
              <NavLink  style={NavlinkStyle} to="/statistics">Statistics</NavLink>
              <NavLink  style={NavlinkStyle} to="/blog">Blog</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;