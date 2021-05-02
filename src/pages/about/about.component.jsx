import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/my-img.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 style={{color:"#F0FFF0"}} className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
               <br/> Hi there! I am <br/><br/> <strong>&nbsp;Nisar Makdum</strong>
                <br/> I am Nisar Makdum, A Web Developer. I consider myself a hard-working person. Not only that, but I am passionate to build up myself as a challenging and responsible person to utilize my knowledge to show my creativity. I am to specialize in front end technologies like HTML5, CSS3, Bootstrap, JavaScript, React JS etc. I have also worked with back end technologies like Node JS, MongoDB, Express, Heroku. Likewise, I have also experienced some hosting tools like GitHub, Firebase and Netlify.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  {/* <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div> */}
                  <div>
                    <a href="https://drive.google.com/file/d/16C9SKqRV84WXeaIypTaMcR57kH_eV15j/view" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/nisar-makdum" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/nisar-makdum/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
