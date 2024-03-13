import React from "react";
import { Link } from "react-router-dom";

import '../../main.css'
import "./home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import headShot from "../../images/headshot.jpg";
import linkedInLogo from "../../images/linkedin-logo.svg";
import gitHubLogo from "../../images/github-logo.svg";
import instagramLogo from "../../images/instagram-logo.svg";

function Home() {
  return (
      <Row>
        <Col id="headShotCol" xs={12} sm={4}>
          <img
            id="headShotImg"
            src={headShot}
            className="img-responsive"
            alt="Adam Hayward posing in a suit"
          />
        </Col>
        <Col
          id="greetingCol"
          sm={12}
          md={8}
          className="displayFlex justifyContentCenter"
          style={{ flexDirection: "column" }}
        >
          <div id="column2">
            <Row>
              <Col>
                <div className="displayFlex">
                  <div id="greetingLine1">Hi there,</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="displayFlex">
                  <div id="greetingLine2">I'm</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  className="displayFlex justifyContentCenter haywardContainer"
                  style={{
                    flexWrap: "wrap",
                  }}
                >
                  <div id="greetingLine3">Adam Hayward</div>
                  <div id="greetingLine4">Welcome to my portfolio</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div id="banner">
                  <div id="bannerRow1">Exciting Improvements are under way</div>
                  <div id="bannerRow2">Make sure to check back soon</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="displayFlex justifyContentCenter " xs={12} xl={9}>              
                <Button id="btnResume"><Link style={{textDecoration:"none", color: "#fff"}} to="/resume">View Resume</Link></Button>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="displayFlex justifyContentCenter" xs={4} xl={3}>
                <a
                  href="https://www.linkedin.com/in/adam-hayward-1562b4173/"
                  target="blank"
                >
                  <img
                    className="img-responsive icon btnCol"
                    src={linkedInLogo}
                    alt="LinkedIn icon"
                  />
                </a>
              </Col>
              <Col className="displayFlex justifyContentCenter" xs={4} xl={3}>
                <a href="https://github.com/adamhayward" target="blank">
                  <img
                    className="img-responsive icon btnCol"
                    src={gitHubLogo}
                    alt="GitHub icon"
                  />
                </a>
              </Col>
              <Col className="displayFlex justifyContentCenter" xs={4} xl={3}>
                <a href="https://www.instagram.com/a.hayward11/" target="blank">
                  <img
                    className="img-responsive icon btnCol`"
                    src={instagramLogo}
                    alt="Instagram icon"
                  />
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  id="finalLine"
                  className="displayFlex justifyContentCenter"
                >
                  <div>I look forward to connecting with you</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
  );
}

export default Home;
