import React from "react";
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
        <span className="text-uppercase" style={{ fontSize: "12px" }}>created by Adam Hayward</span>
      </p>
    </footer>
  );
}

export default Footer;
