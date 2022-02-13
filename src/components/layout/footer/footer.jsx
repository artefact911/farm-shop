import React from "react";
import Logo from "../../ui/logo/logo";
import Copyright from "../../ui/copyright/copyright";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo />
        <Copyright>Создано 2021</Copyright>
      </div>
    </footer>
  );
}

export default Footer;
