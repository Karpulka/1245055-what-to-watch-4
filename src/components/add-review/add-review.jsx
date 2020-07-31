import React, {PureComponent, createRef} from "react";
import {PageType} from "../app/app.jsx";
import PropTypes from "prop-types";
import HeaderWrapper from "../header-wrapper/header-wrapper.jsx";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data";

const ratings = [
  `Rating 1`,
  `Rating 2`,
  `Rating 3`,
  `Rating 4`,
  `Rating 5`,
];

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this._rating = 1;
    this._textRef = createRef();

    this.handlePostButtonclick = this.handlePostButtonclick.bind(this);
    this._changeRating = this._changeRating.bind(this);
  }

  render() {
    const {title, background, src} = this.props;

    return <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderWrapper pageType={PageType.ADD_REVIEW} isBreadcrumbs={true}/>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={src} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {ratings.map((rating, i) => <React.Fragment key={rating + i + 1}>
                <input className="rating__input" id={`star-${i}`} defaultChecked={i === 0 ? true : false} onChange={this._changeRating} type="radio" name="rating" defaultValue={i + 1}/>
                <label className="rating__label" htmlFor={`star-${i}`}>{rating}</label>
              </React.Fragment>)}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" ref={this._textRef} id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" onClick={this.handlePostButtonclick}>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>;
  }

  handlePostButtonclick(evt) {
    evt.preventDefault();
    const {addComment, id} = this.props;

    addComment(id, {
      rating: this._rating,
      comment: this._textRef.current.value
    });
  }

  _changeRating(evt) {
    evt.preventDefault();
    this._rating = evt.currentTarget.value;
  }
}

AddReview.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  addComment: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addComment(filmID, comment) {
    dispatch(Operation.sendComment(filmID, comment));
  }
});

export {AddReview};
export default connect(null, mapDispatchToProps)(AddReview);
