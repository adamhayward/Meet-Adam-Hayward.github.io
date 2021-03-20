import React from "react";
// import EventCalendar from "../../images/event-calendar.png";
// import Noted from "../../images/noted-app.png";
// import WeatherDashboard from "../../images/weather-dashboard.png";
import Container from "../Container";
import Row from "../row";
import Col from "../col";
import Title from "../Title";
import Card from "../Card";
import data from "../../portfolioData.json";

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
          <Card title={data[0].title} img={data[0].img} url={data[0].url} />
        </Col>
        <Col className="col-md-6">
          <Card title={data[0].title} img={data[0].img} url={data[0].url} />
        </Col>
        <Row>
          <Col className="col-md-6 m-2">
            <Card title={data[0].title} img={data[0].img} url={data[0].url} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Portfolio;
