import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Slider from "react-slick";

import Container from "@utils/Container";
import MovieImage from "../MovieImage";
import Styles from "./Carousel.pcss";
import "../../../css/slick.pcss";

const CarouselPrevArrow = props => (
  <i onClick={props.onClick} className="slick-arrow slick-prev material-icons">
    chevron_left
  </i>
);

const CarouselNextArrow = props => (
  <i onClick={props.onClick} className="slick-arrow slick-next material-icons">
    chevron_right
  </i>
);

const GetGenreNames = (allGenres, movieGenres) => {
  let movieGenreNames = [];
  allGenres.find((el, index) => {
    if (movieGenres.includes(el.id)) {
      movieGenreNames.push(el.name);
    }
  });

  return movieGenreNames.length > 0 ? movieGenreNames.join(" ") : "";
}

const Carousel = ({
  movies,
  config: {
    images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
  },
  genres
}) => {
  const sliderSettings = {
    className: Styles.container,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />
  };

  const slides = movies.map(movie => (
    <div className={Styles.hero} key={movie.id}>
      <Container>
        <div className={Styles.info}>
          <h2 className={Styles.title}>{movie.title}</h2>
          <p>{GetGenreNames(genres, movie.genre_ids)}</p>
          <p className={Styles.overview}>
            {`${movie.overview.substr(0, 150)}...`}
          </p>
          <Link className={Styles.link} to={`/movie/${movie.id}`}>
            Read more
          </Link>
        </div>
      </Container>
      <MovieImage
        backdrop
        size={imageSizes[3]}
        imageBaseUrl={imageBaseUrl}
        path={movie.backdrop_path}
      />
    </div>
  ));

  return slides.length > 0 && <Slider {...sliderSettings}>{slides}</Slider>;
};

console.log("genres");
console.log(Carousel.genres);

Carousel.propTypes = {
  movies: PropTypes.array,
  genres: PropTypes.array,
  config: PropTypes.shape({
    images: PropTypes.shape({
      backdrop_sizes: PropTypes.array,
      secure_base_url: PropTypes.string
    })
  })
};

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config, genres: state.genres };
};

export default connect(mapStateToProps)(Carousel);
