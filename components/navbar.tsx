'use client';

import {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar(){
  const [active, setActive] = useState('Home');
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ena Cake's Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '500px' }}
                        navbarScroll
                    >
                    <Nav.Link
                      href="#Home"
                      active={active === 'Home'}
                      onClick={() => setActive('Home')}
                    >
                    Home
                    </Nav.Link>

                    <Nav.Link
                      href="#Menu"
                      active={active === 'Menu'}
                      onClick={() => setActive('Menu')}
                    >
                    Menu
                    </Nav.Link>

                    <Nav.Link
                      href="#About"
                      active={active === 'About'}
                      onClick={() => setActive('About')}
                    >
                    About Owner
                    </Nav.Link> 
                    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar;

