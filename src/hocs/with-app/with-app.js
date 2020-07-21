import React, {PureComponent} from "react";

const withApp = (Component) => {
  class WithApp extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selectedFilm: null
      };

      this.handleFilmClick = this.handleFilmClick.bind(this);
    }

    render() {
      const {selectedFilm} = this.state;

      return <Component
        {...this.props}
        handleFilmClick={this.handleFilmClick}
        selectedFilm={selectedFilm}>
      </Component>;
    }

    handleFilmClick(film) {
      this.setState({selectedFilm: film});
    }
  }

  WithApp.propTypes = {};

  return WithApp;
};

export default withApp;
