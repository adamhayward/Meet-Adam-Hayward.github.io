import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
       <p className="text-sm-center">&copy;{new Date().getFullYear()} MeetAdamHayward.com</p>
    </footer>
  );
}

export default Footer;
