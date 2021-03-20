import React from "react";
import Logo from "../../images/logo192.png";
import "./style.css";

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
          created by adam hayward
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
