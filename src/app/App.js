import React from "react";
import { render } from "react-dom";
import { Route, Swith, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { mapDispachToProps } from "./redux/Store";

import Section from "@utils/Section";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "../css/global.pcss";

const NotFound = () => <h1>404 error..., page not found</h1>;

class App extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		this.props.getConfig();
	}

	render() {
		const { location, history } = this.props;

		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default withRouter(connect(null, mapDispachToProps)(App));