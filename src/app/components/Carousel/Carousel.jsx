import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Slider from "react-slick";

import Container from "@utils/Container";
import MovieImage from "../MovieImage";
import GetGenreNames from "../../utils/Utils";
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
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />
  };

  const slides = movies.map(movie => (
    <div className={Styles.hero} key={movie.id}>
      <Container>
        <div className={Styles.info}>
          <h2 className={Styles.title}>{movie.title}</h2>
          <p className={Styles.genres}><span className={Styles.spacing}>{GetGenreNames(genres, movie.genre_ids, " ")}</span> | <span className={Styles.duration}>Duration: {movie.popularity}</span></p>
          <Link className={[Styles.link, Styles.watch].join(' ')} to={`/watch/${movie.id}`}>
            Watch Movie
          </Link>
          <Link className={[Styles.link, Styles.view].join(' ')} to={`/view/${movie.id}`}>
            View Info
          </Link>
          <Link className={[Styles.link, Styles.wishlist].join(' ')} to={`/view/${movie.id}`}>
            + Add To Wishlist
          </Link>
          <div className={Styles.rating}>
            <p className={Styles.ratingTitle}>Rating <span>base on {movie.vote_count} reviews</span></p>
            <p className={Styles.ratingStars}>
              <a href="#">{movie.vote_average}</a>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </p>
          </div>
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
