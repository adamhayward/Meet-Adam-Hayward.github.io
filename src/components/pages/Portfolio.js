import React from "react";
import Container from "../Container";
import Row from "../row";
import Col from "../col";
import Title from "../Title";
import Card from "../Card";
import data from "../../portfolioData.json";
import EventCal from "../../public/images/event-calendar.png"
import Noted from "../../public/images/noted-app.png"
import Weather from "../../public/images/weather-dashboard.png"


function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <Title>portfolio</Title>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6">
          <Card title={data[0].title} img={EventCal} url={data[0].url} />
        </Col>
        <Col className="col-md-6">
          <Card title={data[1].title} img={Noted} url={data[0].url} />
        </Col>
        <Row>
          <Col className="col-md-6 m-2">
            <Card title={data[2].title} img={Weather} url={data[0].url} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Portfolio;
