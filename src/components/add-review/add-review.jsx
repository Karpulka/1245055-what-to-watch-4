import React from "react";
import {PageType} from "../app/app.jsx";
import PropTypes from "prop-types";
import HeaderWrapper from "../header-wrapper/header-wrapper.jsx";

const ratings = [
  `Rating 1`,
  `Rating 2`,
  `Rating 3`,
  `Rating 4`,
  `Rating 5`,
];

const AddReview = (props) => {
  const {title, background, src, onSubmitComment, onChangeRating, isDisableSubmit, children, isDisableForm, errorText} = props;

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
      {errorText ? <div className="add-review__message add-review__error-message">
        <p>{errorText}</p>
      </div> : ``}
      <form action="#" className="add-review__form">
        <fieldset disabled={isDisableForm}>
          <div className="rating">
            <div className="rating__stars">
              {ratings.map((rating, i) => <React.Fragment key={rating + i + 1}>
                <input className="rating__input" id={`star-${i}`} defaultChecked={i === 0 ? true : false} onChange={onChangeRating} type="radio" name="rating" defaultValue={i + 1}/>
                <label className="rating__label" htmlFor={`star-${i}`}>{rating}</label>
              </React.Fragment>)}
            </div>
          </div>

          <div className="add-review__text">
            {children}
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isDisableSubmit} onClick={onSubmitComment}>Post</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

  </section>;
};

AddReview.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  addComment: PropTypes.func.isRequired,
  isDisableSubmit: PropTypes.bool.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  isDisableForm: PropTypes.bool.isRequired,
  errorText: PropTypes.string
};

export default AddReview;
