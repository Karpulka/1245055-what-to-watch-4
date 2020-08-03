import React, {PureComponent} from "react";

const MIN_TEXT_LENGTH = 50;
const MAX_TEXT_LENGTH = 400;

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.handleChangeText = this.handleChangeText.bind(this);

      this.state = {
        isDisableSubmit: true
      };
    }

    render() {
      const {isDisableSubmit} = this.state;

      return <Component {...this.props}
        isDisableSubmit={isDisableSubmit}
        onChangeText={this.handleChangeText}
      />;
    }

    handleChangeText(text) {
      if (text.length >= MIN_TEXT_LENGTH && text.length <= MAX_TEXT_LENGTH) {
        this.setState({isDisableSubmit: false});
      } else {
        this.setState({isDisableSubmit: true});
      }
    }
  }

  WithReview.propTypes = {};

  return WithReview;
};

export default withReview;
