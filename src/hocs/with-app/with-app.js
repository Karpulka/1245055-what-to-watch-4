import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
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
        handleItemClick={this.handleItemClick}
        activeItem={activeItem}>
      </Component>;
    }

    handleItemClick(film) {
      this.setState({activeItem: film});
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
