import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card(props) {
  return (
    // <div className="card">
    //   <div className="card-body">
    //     <a href={props.url}>
    //       <h5 className="card-title" style={{ color: "orange" }}>
    //         {props.title}
    //       </h5>
    //       <img src={props.img} className="card-img-top" alt={props.title}></img>
    //     </a>
    //   </div>
    // </div>
    <div className="card">
      <a href={props.url}>
        <h5 className="card-title text-uppercase text-center m-auto" style={{ color: "orange" }}>
          {props.title}
        </h5>
        </a>
        <div href={props.url}className="img-container m-auto">
          <img  alt={props.title} src={props.img} />
        </div>
    </div>
  );
}

export default Card;
