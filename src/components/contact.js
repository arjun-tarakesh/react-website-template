import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import {IoLogoGithub,IoIosAppstore,IoIosBatteryFull,IoIosBookmarks} from 'react-icons/io';
import "./contact.css"
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid className="bg">
      <h1>Contact</h1>
        <Container fluid >
        <Nav className="contact">
        <NavItem className="contact-item">
          <NavLink href="#"><IoIosAppstore size="70"/></NavLink>
        </NavItem>
        <NavItem className="contact-item">
          <NavLink href="#"><IoIosAppstore size="70"/></NavLink>
        </NavItem >
        <NavItem className="contact-item">
          <NavLink href="#"><IoIosAppstore size="70"/></NavLink>
        </NavItem>        
        
        <NavItem className="contact-item">
          <NavLink href="#"><IoIosAppstore size="70"/></NavLink>
        </NavItem>
        
                
        <NavItem className="contact-item">
          <NavLink href="#"><IoIosAppstore size="70"/></NavLink>
        </NavItem>

      </Nav>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;