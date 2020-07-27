import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
        isShowFilm: false
      };

      this.handleItemClick = this.handleItemClick.bind(this);
      this.handlePlayClick = this.handlePlayClick.bind(this);
      this.handleExitClick = this.handleExitClick.bind(this);
    }

    render() {
      const {activeItem, isShowFilm} = this.state;

      return <Component
        {...this.props}
        onItemClick={this.handleItemClick}
        activeItem={activeItem}
        isShowFilm={isShowFilm}
        onPlayButtonClick={this.handlePlayClick}
        onExitButtonClick={this.handleExitClick}>
      </Component>;
    }

    handleItemClick(film) {
      this.setState({activeItem: film});
    }

    handlePlayClick() {
      this.setState({isShowFilm: true});
    }

    handleExitClick() {
      this.setState({isShowFilm: false});
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
