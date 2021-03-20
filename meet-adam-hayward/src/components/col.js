import React from "react";


function Col(props) {
  return (
    <div className={`col${props.fluid ? "-fluid" : ""}`} {...props}>
    {props.children}
    </div>
  );
}

export default Col;
