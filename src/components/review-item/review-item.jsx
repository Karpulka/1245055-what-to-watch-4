import React from "react";
import PropTypes from "prop-types";
import {prepareReviewDate} from "../../utils";

const ReviewItem = (props) => {
  const {user, rating, comment, date} = props.review;

  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{user}</cite>
        <time className="review__date" dateTime="2016-12-24">{prepareReviewDate(date)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>;
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default ReviewItem;
