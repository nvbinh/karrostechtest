import React from "react";
import Styles from "./footer.pcss";
import { NavLink } from 'react-router-dom';

const logo = ""; // require("../../../img/408x161-powered-by-rectangle-green.png");

const Footer = () => (
  <div className={Styles.navigation}>
    <div className={Styles.navigationTop}>
      <a className={Styles.logo} href="/">THEMOVIEBOX</a>
      <ul className={Styles.menu}>
        <li className={Styles.menuitem}>
          <NavLink exact className={Styles.menulink} activeClassName={Styles.active} to="/">About</NavLink>
        </li>
        <li className={Styles.menuitem}>
          <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/genres">Movies</NavLink>
        </li>
        <li className={Styles.menuitem}>
          <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/genres">Ratings</NavLink>
        </li>
        <li className={Styles.menuitem}>
          <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/genres">Contact</NavLink>
        </li>
      </ul>
    </div>

    <div className={Styles.navigationBottom}>
      <p>Designed by Milan Houter. All rights reserved.</p>
      <p>
        <i className="material-icons">share</i>
        <i className="material-icons">share</i>
        <i className="material-icons">share</i>
        <i className="material-icons">share</i>
      </p>
    </div>
  </div>
);

export default Footer;