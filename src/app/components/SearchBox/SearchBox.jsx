import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Classnames from 'classnames';
import { debounce } from 'throttle-debounce';
import enhanceWithClickOutside from 'react-click-outside';

import apiConnect from '../../services/ApiConnect';
import Styles from './SearchBox.pcss';
import Container from "@utils/Container";

class SearchBox extends React.Component {
  constructor() {
    super();
    this.callAjax = debounce(300, this.callAjax);
    this.state = {
      searchResults: null,
    };
  }

  componentWillMount() {
    apiConnect.getGenres().then(genres => this.setState({ genres }));
  }

  handleClickOutside() {
    this.props.collapsed && this.props.toggleSearchBox();
  }

  render() {
    this.props.collapsed && this.textInput.focus();

    const searchBoxClasses = Classnames({
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.props.collapsed,
    });

    const resultContainerClasses = Classnames({
      [Styles.resultcontainer]: true,
      [Styles.noresults]: !this.state.searchResults,
      [Styles.collapsed]: this.props.collapsed,
      container: true,
    });

    return (
      <div className={searchBoxClasses}>
        <Container>
          <form>
            <input
              placeholder="Search for movie..."
              className={Styles.input}
              type="text"
              ref={(input) => { this.textInput = input; }}
            />
          </form>
        </Container>
      </div>
    );
  }
}

SearchBox.propTypes = {
  toggleSearchBox: PropTypes.func,
  collapsed: PropTypes.bool,
};

SearchBox.defaultProps = {
  collapsed: false,
  toggleSearchBox: () => null,
};

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};

export default connect(mapStateToProps)(enhanceWithClickOutside(SearchBox));
