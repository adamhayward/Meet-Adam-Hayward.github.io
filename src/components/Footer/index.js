import React from "react";
import Logo from "../../public/images/logo192.png";
import "./style.css";

const name = 'adam hayward';


function Footer() {
  return (
    <footer className="footer bg-dark">
      <p className="text-sm-center text-white" style={{ paddingTop: "2%" }}>
        <span style={{ fontSize: "16px" }}>
          &copy;{new Date().getFullYear()}{" "}
        </span>
        MeetAdamHayward<span style={{ color: "orange" }}>.com</span>
        <br />
        <p className="text-uppercase" style={{ fontSize: "12px" }}>
          created by {name}
          <br />
          powerd by React.js{" "}
          <img
            src={Logo}
            style={{ hight: "15px", width: "15px" }}
            alt="react.js logo"
          />
        </p>
      </p>
    </footer>
  );
}

export default Footer;
