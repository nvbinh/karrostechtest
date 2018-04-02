import React from "react";
import Styles from "./footer.pcss";

const tmdbLogo = require("../../../img/408x161-powered-by-rectangle-green.png");

const Footer = () => (
  <div className={Styles.footer}>
    <img className={Styles.logo} src={tmdbLogo} alt="" />
    <a href="https://github.com/nvbinh/karrostechtest">
      https://github.com/nvbinh/karrostechtest
    </a>
  </div>
);

export default Footer;