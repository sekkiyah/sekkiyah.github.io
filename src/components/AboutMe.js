import React from 'react';
import { Button, Container } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container className='page-segment'>
      <h1 className='text-center'>Hello! I'm Seth</h1>

      <h1 className='text-center'>About Me</h1>
      <Button onClick={() => window?.open('/files/seth-resume-2023.v1.pdf', '_blank')}>Download CV</Button>
    </Container>
  );
};

export default AboutMe;
