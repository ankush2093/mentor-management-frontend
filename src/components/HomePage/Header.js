import React, { Component } from "react";

import {
  Navbar,
  Container,
  Nav,
  
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">Mentoring System</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
                <Nav.Link href="/student">Student</Nav.Link>
                <Nav.Link href="/mentor">Mentor</Nav.Link>
                <Nav.Link href="/parent">Parent</Nav.Link>
              </Nav>
           
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
