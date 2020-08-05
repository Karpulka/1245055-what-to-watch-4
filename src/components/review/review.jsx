import React, {PureComponent, createRef} from "react";
import {PageType} from "../app/app.jsx";
import PropTypes from "prop-types";
import HeaderWrapper from "../header-wrapper/header-wrapper.jsx";
import {getErrorText, getIsDisableComentForm} from "../../reducer/data/selectors";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";

const ratings = [
  `Rating 1`,
  `Rating 2`,
  `Rating 3`,
  `Rating 4`,
  `Rating 5`,
];

class Review extends PureComponent {
  constructor(props) {
    super(props);

    this._rating = 1;
    this._textRef = createRef();

    this._handlePostButtonclick = this._handlePostButtonclick.bind(this);
    this._handleChangeRating = this._handleChangeRating.bind(this);
  }

  render() {
    const {title, background, src, onChangeText, isDisableSubmit, isDisableForm, errorText, id} = this.props;

    return <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderWrapper pageType={PageType.ADD_REVIEW} breadcrumbTitle={title} isBreadcrumbs={true} filmID={id}/>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={src} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        {errorText ? <div className="add-review__message add-review__error-message">
          <p>{errorText}</p>
        </div> : ``}
        <form action="#" className="add-review__form">
          <fieldset disabled={isDisableForm}>
            <div className="rating">
              <div className="rating__stars">
                {ratings.map((rating, i) => <React.Fragment key={rating + i + 1}>
                  <input className="rating__input" id={`star-${i}`} defaultChecked={i === 0 ? true : false}
                    onChange={this._handleChangeRating} type="radio" name="rating" defaultValue={i + 1}/>
                  <label className="rating__label" htmlFor={`star-${i}`}>{rating}</label>
                </React.Fragment>)}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" onChange={(evt) => {
                evt.preventDefault();
                onChangeText(evt.currentTarget.value);
              }} ref={this._textRef} id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={isDisableSubmit}
                  onClick={this._handlePostButtonclick}>Post
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

    </section>;
  }

  _handlePostButtonclick(evt) {
    evt.preventDefault();
    const {handleSubmitComment, id, onSubmitReview} = this.props;

    handleSubmitComment(id, {
      rating: this._rating,
      comment: this._textRef.current.value
    }, onSubmitReview);
  }

  _handleChangeRating(evt) {
    this._rating = evt.currentTarget.value;
  }
}

Review.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isDisableSubmit: PropTypes.bool.isRequired,
  handleSubmitComment: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitReview: PropTypes.func.isRequired,
  isDisableForm: PropTypes.bool.isRequired,
  errorText: PropTypes.string
};

const mapStateToProps = (state) => ({
  isDisableForm: getIsDisableComentForm(state),
  errorText: getErrorText(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitComment(filmID, comment, callback) {
    dispatch(Operation.sendComment(filmID, comment, callback));
  }
});

export {Review};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
