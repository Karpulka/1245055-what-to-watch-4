import * as React from "react";
import {Film} from "../../types";
import {Subtract} from "utility-types";

interface State {
  activeItem: Film;
}

interface InjectingPtops {
  onItemClick: () => void;
  activeItem: Film;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingPtops>

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null
      };

      this.handleItemClick = this.handleItemClick.bind(this);
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        onItemClick={this.handleItemClick}
        activeItem={activeItem}>
      </Component>;
    }

    handleItemClick(film) {
      this.setState({activeItem: film});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
