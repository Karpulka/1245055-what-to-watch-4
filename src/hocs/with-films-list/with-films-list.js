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
      const {films, onFilmClick} = this.props;
      const {activeFilmID} = this.state;

      return <div className="catalog__movies-list">
        {films.map((film, id) => <Component
          {...this.props}
          key={film.title + id}
          film={film}
          onFilmHover={this.handleFilmHover}
          onFilmClick={onFilmClick}
          onFilmBlur={this.handleFilmBlur}
          isPlaying={activeFilmID === film.id}
        />
        )}
      </div>;
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
