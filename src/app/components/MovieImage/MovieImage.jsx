import React from "react";
import Classnames from "classnames";
import Styles from "./MovieImage.pcss";

class MovieImage extends React.Component {
  constructor() {
    super();

    this.state = {
      imageLoaded: false,
      imageError: false
    }
  }

  handleImageError() {
    this.setState({
      imageError: true
    });
  }

  render() {
    const imageClasses = Classnames({
      [Styles.image]: true,
      [Styles.loaded]: this.state.imageLoaded
    });
    const containerClasses = Classnames({
      [Styles.container]: true,
      [Styles.large]: this.props.size === "original",
      [Styles.medium]: this.props.size === "w300",
      [Styles.small]: this.props.size === "w45"
    });

    return (
      <div className={containerClasses}>
        {!this.state.imageLoaded && !this.state.imageError && <div className={Styles.loader} />}
        {!this.state.imageError?
          <img
            onLoad={() => this.setState({
              imageLoaded: true
            })}
            onError={() => this.handleImageError()}
            className={imageClasses}
            src={this.props.imageBaseUrl + this.props.size + this.props.path}
            alt="" />
          :
          <div className={`${Styles.noimage} material-icons`}>broken_image</div>
        }
      </div>
    );
  }
}

export default MovieImage;