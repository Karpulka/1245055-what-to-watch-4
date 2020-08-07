import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  activeFilmID: number;
}

interface InjectingProps {
  onFilmHover: () => void;
  onFilmBlur: () => void;
  activeFilmID: number;
}

const withFilmsList = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithFilmsList extends React.PureComponent<T, State> {
    private _timeoutID: NodeJS.Timer;

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

  return WithFilmsList;
};

export default withFilmsList;
