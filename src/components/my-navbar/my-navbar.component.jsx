import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <h2 className="ml-4 text-secondary">Nisar</h2>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link className="me-4" href="#home">Home</Nav.Link>
              <Nav.Link className="me-4 text-success" href="https://drive.google.com/file/d/16C9SKqRV84WXeaIypTaMcR57kH_eV15j/view">Resume</Nav.Link>
              <Nav.Link className="me-4" href="#about">About</Nav.Link>
              <Nav.Link className="me-4" href="#skills">Skills</Nav.Link>
              <Nav.Link className="me-4" href="#projects">Projects</Nav.Link>
              <Nav.Link className="me-4" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
