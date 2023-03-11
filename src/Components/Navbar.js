import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";

let props = {
  name: 'Cyber Ocean'
};

function NavbarComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navbar fixed="top" className="cardc w-100" bg="dark" variant="dark">
        <Container>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand >{props.name}</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link href='/home' style={{ textDecoration: 'none' }} activeclassname="active" >Home</Nav.Link>
          </Nav>
          <Badge className='font' bg="success">{time.toLocaleTimeString()}</Badge>
        </Container>
      </Navbar>
    </div>

  )
}

export default NavbarComponent
