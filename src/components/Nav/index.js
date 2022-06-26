import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

// export const Navigation = () => {

// };

function Navigation() {
  return (
    <Navbar className="nav-background" expand="lg">
      <Container>
        <Navbar.Brand className="nav-text" href="/">KC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-text" href="/">Home</Nav.Link>
            <Nav.Link className="nav-text" href="/about">About</Nav.Link>
            <Nav.Link className="nav-text" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;