import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withFilmsList = (Component) => {
  class WithFilmsList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilmID: null
      };

      this.handleFilmHover = this.handleFilmHover.bind(this);
      this.handleFilmBlur = this.handleFilmBlur.bind(this);
      this._timeoutID = null;
    }

    render() {
      const {activeFilmID} = this.state;

      return <Component
        {...this.props}
        onFilmHover={this.handleFilmHover}
        onFilmBlur={this.handleFilmBlur}
        activeFilmID={activeFilmID}
      />;
    }

    componentWillUnmount() {
      if (this._timeoutID) {
        clearTimeout(this._timeoutID);
      }
    }

    handleFilmHover(film) {
      this._timeoutID = setTimeout(() => this.setState({activeFilmID: film.id}), 1000);
    }

    handleFilmBlur() {
      clearTimeout(this._timeoutID);
      this.setState({activeFilmID: null});
    }
  }

  WithFilmsList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })),
    onFilmClick: PropTypes.func.isRequired
  };

  return WithFilmsList;
};

export default withFilmsList;
