import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <a href={props.url}>
        <h5
          className="card-title text-uppercase text-center m-auto"
          style={{ color: "orange" }}
        >
          {props.title}
        </h5>
      </a>
      <div href={props.url} className="img-container m-auto">
        <img
          alt={props.title}
          src={props.img}
          style={{ width: "100%", hight: "100%" }}
        />
      </div>
    </div>
  );
}

export default Card;
