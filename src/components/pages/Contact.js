import React from "react";
import Container from "../Container";
import Row from "../row";
import Col from "../col";
import Title from "../Title";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <Title>contact</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <form>
            <div className="form-group text-uppercase">
              <label for="formGroupExampleInput">name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              ></input>
            </div>
            <div className="form-group text-uppercase">
              <label for="exampleInputEmail1">email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="form-group text-uppercase">
              <label for="exampleFormControlTextarea1">message</label>
              <textarea
                className="form-control"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-outline-dark text-uppercase"
              style={{ background: "orange", color: "white" }}
            >
              submit
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
