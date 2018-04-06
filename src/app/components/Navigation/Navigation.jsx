import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import SearchBox from "../SearchBox";
import Styles from "./Navigation.pcss";
import {withRouter} from "react-router-dom";

class Header extends React.Component {
    constructor() {
        super();
        this.toggleSearchBox = this.toggleSearchBox.bind(this);
        this.state = {
            toggleSearchBox: false
        };
    }

    toggleSearchBox() {
        this.setState({
            toggleSearchBox: !this.state.toggleSearchBox
        })
    }

    render() {
      return (
        <div className={Styles.navigation}>
          <ul className={Styles.menu}>
            <li className={Styles.menuitem}>
              <NavLink exact className={Styles.menulink} activeClassName={Styles.active} to="/">Popular</NavLink>
            </li>
            <li className={Styles.menuitem}>
              <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/genres">Top Rated</NavLink>
            </li>
            <li className={Styles.menuitem}>
              <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/genres">Upcomming</NavLink>
            </li>
            <li className={Styles.menuitem}>
              <NavLink className={Styles.menulink} activeClassName={Styles.active} to="/genres">
                Genre <i className="material-icons">keyboard_arrow_down</i>
              </NavLink>
            </li>
          </ul>

          <div className={Styles.views}>
            <i className={`${Styles.activeView} material-icons`}>view_list</i>
            <i className="material-icons">view_day</i>
          </div>
        </div>
      );
    }
}

Header.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Header.defaultProps = {
  history: {},
};

export default withRouter(Header);
