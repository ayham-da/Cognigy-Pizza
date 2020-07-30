import React, {useState}                          from 'react';
import {Link, withRouter, NavLink, useHistory }       from 'react-router-dom'

import Logo                                       from '../../images/cognigy_logo.svg'
import {Button }                                  from 'react-bootstrap'
import {Navbar,Nav,NavDropdown,Form,FormControl}  from 'react-bootstrap'
import                                                 'bootstrap/dist/css/bootstrap.min.css';
import                                                 './MainHeader.css';
import { List } from                                    'react-bootstrap-icons';
import axios                                            from "axios";

const MainHeader = props => {
  const { location } = props;
  
    const [expanded, setExpanded] = useState(false);
    const closeNav = () => setExpanded(false)
  return (
      
      <Navbar variant="light"  expand="lg" sticky="top"  
              className=" navbar1 navbar-fixed-top" activeKey={location}
              expanded={expanded}>
          <Navbar.Brand exact onClick={closeNav} activeClassName="active" as={NavLink} to="/" eventKey="/">
              <img width="100px" height="40px" className="d-inline-block align-top mr-1" alt="logo" src = {Logo}/>
              {/* <span className="text-dark navbar-brand1"></span> */}
          </Navbar.Brand>
          <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")}
                aria-controls="responsive-navbar-nav" 
                className="text-light" 
                bg="light" >
                <List className="text-light" size={40}/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto " activeKey={location}> 
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-dark" activeClassName="active" as={NavLink} to="/AboutUs" >About us</Nav.Link>
            <Nav.Link style={{display:"flex", justifyContent:"center"}} onClick={closeNav} className="text-dark" activeClassName="active" as={NavLink} to="/Contact" >Contact</Nav.Link>           
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className=" text-light">Search</Button>
          </Form>
          <NavDropdown className="text-light" title="More" id="basic-nav-dropdown" >
            <NavDropdown.Item style={{display:"flex", justifyContent:"center"}} onClick={closeNav}  className="bg-dark text-light" activeClassName="active" as={NavLink} to="#Login"> Login </NavDropdown.Item> 
            <NavDropdown.Item style={{display:"flex", justifyContent:"center"}} onClick={closeNav}  className="bg-dark text-light" activeClassName="active" as={NavLink} to="#logout">logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
    </Navbar>
     

  );
};

export default MainHeader;
