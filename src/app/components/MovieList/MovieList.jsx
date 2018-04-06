import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Styles from "./MovieList.pcss";
import MovieImage from "../MovieImage";
import GetGenreNames from "../../utils/Utils";

const MovieList = ({
  movies,
  genres,
  config: {
    images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
  }
}) => {
  const movieList = movies.map(movie => (
    <Link className={Styles.movie} key={movie.id} to={`/movie/${movie.id}`}>
      <div className={Styles.imageWrapper}>
        <MovieImage
          poster
          size={imageSizes[0]}
          imageBaseUrl={imageBaseUrl}
          path={movie.poster_path}
        />
        <span className={Styles.year}>{(new Date(movie.release_date)).getFullYear()}</span>
      </div>
      <div className={Styles.info}>
        <div className={Styles.texts}>
          <h3 className={Styles.title}>{`${movie.title.substr(0, 18)}...`}</h3>
          <span className={Styles.genres}>{`${GetGenreNames(genres, movie.genre_ids, ", ").substr(0, 18)}...`}</span>
        </div>
        <span className={Styles.vote}>{movie.vote_average}</span>
      </div>
    </Link>
  ));
  return <div className={Styles.container}>{movieList}</div>;
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  config: PropTypes.shape({
    images: PropTypes.shape({
      backdrop_sizes: PropTypes.array,
      secure_base_url: PropTypes.string
    })
  })
};

MovieList.defaultProps = {
  movies: [],
  genres: [],
  config: {}
};

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config, genres: state.genres };
};

export default connect(mapStateToProps)(MovieList);
