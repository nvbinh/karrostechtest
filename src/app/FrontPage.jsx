import React from "react";
import {connect} from "react-redux";
import {mapDispachToProps} from "./redux/Store";
import Container from "@utils/Container";
import Carousel from "./components/Carousel";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import Styles from "../css/layout.pcss";

class Front extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getLatestMovies();
  }

  render() {
    console.log(this.props.latestMovies);
    return (
      <div className={Styles.page}>
        <Carousel movies={this.props.latestMovies.slice(0, 3)} />
        <Container large={true}>
          <Navigation />
          <MovieList movies={this.props.latestMovies.slice(5)} />
        </Container>
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