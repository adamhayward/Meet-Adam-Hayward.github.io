import React from "react";
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
        <Col className="col">
          <Card title={data[0].title} img={data[0].image} url={data[0].url} />
        </Col>
        <Col className="col">
          <Card title={data[1].title} img={data[0].image} url={data[1].url} />
        </Col>
        <Col className="col">
          <Card title={data[2].title} img={data[0].image} url={data[2].url} />
        </Col>
        <Col className="col">
          <Card title={data[3].title} img={data[0].image} url={data[3].url} />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
