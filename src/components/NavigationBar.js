import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
      <Navbar className='mb-5'>
        <Container>
          <Navbar.Brand className='d-flex align-items-center'>
            <p className='m-0 fst-italic fw-light'>{'<SH / >'}</p>
            <a href='https://www.linkedin.com/in/seth-hinshaw/' target='_blank' className='mx-2 mb-1'>
              <img src='/images/logos/linkedin-icon.png' alt='li' width='20' height='20' />
            </a>
            <a href='https://github.com/sekkiyah' target='_blank' className='mb-1'>
              <img src='/images/logos/github.png' alt='gh' width='20' height='20' />
            </a>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Skills</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
