import React, { useState } from 'react';

import { Link, animateScroll as scroll } from "react-scroll"; //smooth scroll
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import "./Navbar.css"

// navbar from reactstrap with a lil style - found in navbar css

const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark  expand="md">
        <NavbarBrand className="brand" href="/">AT.</NavbarBrand>
        <NavbarToggler onClick={toggle} className="navbar-toggler"></NavbarToggler>
        
        <Collapse isOpen={isOpen}  navbar>
          <Nav className="navBar" navbar >
            {/* nav1 */}
            <NavItem className="nav-item">
              {/* smooth scroll link here is a smoothscroll element*/}
              <Link
              
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
              ><NavLink  style={{color:"white"}} className="nav-item-text" href="">About</NavLink></Link>
              {/* end of smooth scroll */}
            </NavItem>
            {/* nav2 */}
            <NavItem className="nav-item">
             
              <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
                > <NavLink className="nav-item-text" style={{color:"white"}}href="">Skills</NavLink></Link>


             
            </NavItem>
            {/* nav2 */}
            <NavItem className="nav-item">
            <Link
                  activeClass="active"
                  to="certs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
                > <NavLink className="nav-item-text" style={{color:"white"}}href="">Certificates</NavLink></Link>

              
            </NavItem>
            {/* nav3 */}

            <NavItem className="nav-item">
            <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
                > <NavLink className="nav-item-text" style={{color:"white"}}href="">Projects</NavLink></Link>

              
            </NavItem>
            {/* nav3 */}

            <NavItem className="nav-item">
            <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
                > <NavLink className="nav-item-text" style={{color:"white"}}href="">Contact</NavLink></Link>

              
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;