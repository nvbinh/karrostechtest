import React from "react";
import {connect} from "react-redux";
import {mapDispachToProps} from "./redux/Store";
import Container from "@utils/Container";
import Carousel from "./components/Carousel";

class Front extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getLatestMovies();
  }

  render() {
    return (
      <div className="page">
        <Carousel movies={this.props.latestMovies.slice(0, 3)} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    latestMovies: state.movies.latest
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Front);