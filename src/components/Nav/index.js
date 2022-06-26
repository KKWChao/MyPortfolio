import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

// export const Navigation = () => {

// };

function Navigation() {
  return (
    <Navbar className="nav-background" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-text">KC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-text">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-text">Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-text">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-text">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;