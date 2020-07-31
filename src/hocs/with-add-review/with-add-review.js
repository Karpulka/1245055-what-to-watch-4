import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getIsDisableComentForm} from "../../reducer/data/selectors";

const MIN_TEXT_LENGTH = 50;
const MAX_TEXT_LENGTH = 400;

const withAddReview = (Component) => {
  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.handleChangeText = this.handleChangeText.bind(this);

      this._rating = 1;
      this._textRef = createRef();

      this.handlePostButtonclick = this.handlePostButtonclick.bind(this);
      this.handleChangeRating = this.handleChangeRating.bind(this);

      this.state = {
        isDisableSubmit: true
      };
    }

    render() {
      const {isDisableSubmit} = this.state;

      return <Component {...this.props}
        isDisableSubmit={isDisableSubmit}
        onSubmitComment={this.handlePostButtonclick}
        onChangeRating={this.handleChangeRating}>
        <textarea className="add-review__textarea" name="review-text" onChange={this.handleChangeText} ref={this._textRef} id="review-text" placeholder="Review text"></textarea>
      </Component>;
    }

    handleChangeText(evt) {
      evt.preventDefault();

      if (evt.currentTarget.value.length >= MIN_TEXT_LENGTH && evt.currentTarget.value.length <= MAX_TEXT_LENGTH) {
        this.setState({isDisableSubmit: false});
      } else {
        this.setState({isDisableSubmit: true});
      }
    }

    handlePostButtonclick(evt) {
      evt.preventDefault();
      const {addComment, id} = this.props;

      addComment(id, {
        rating: this._rating,
        comment: this._textRef.current.value
      });
    }

    handleChangeRating(evt) {
      evt.preventDefault();
      this._rating = evt.currentTarget.value;
    }
  }

  WithAddReview.propTypes = {
    id: PropTypes.number.isRequired,
    addComment: PropTypes.func.isRequired
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAddReview);
};

const mapStateToProps = (state) => ({
  isDisableForm: getIsDisableComentForm(state)
});

const mapDispatchToProps = (dispatch) => ({
  addComment(filmID, comment) {
    dispatch(Operation.sendComment(filmID, comment));
  }
});

export default withAddReview;
