import * as React from "react";
import {Subtract} from "utility-types";

const MIN_TEXT_LENGTH = 50;
const MAX_TEXT_LENGTH = 400;

interface State {
  isDisableSubmit: boolean
}

interface InjectingProps {
  isDisableSubmit: boolean,
  onChangeText: () => void
}

const withReview = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithReview extends React.PureComponent<T, State> {
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

  return WithReview;
};

export default withReview;
