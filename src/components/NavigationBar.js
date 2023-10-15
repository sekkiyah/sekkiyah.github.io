import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
      <Navbar className='mb-5'>
        <Container>
          <Navbar.Brand>
            Seth Hinshaw{' '}
            {/* <span className='socials'>
              <a href='https://www.linkedin.com/in/seth-hinshaw/' target='_blank'>
                <img src='../images/linkedin-icon.png' alt='li' />
              </a>
              <a href='https://github.com/sekkiyah' target='_blank'>
                <img src='../images/github.png' alt='gh' />
              </a>
            </span> */}
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
