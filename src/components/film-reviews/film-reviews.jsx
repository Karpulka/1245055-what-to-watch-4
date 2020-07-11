import React from "react";
import PropTypes from "prop-types";
import comments from "../../mocks/comments";
import Review from "../review/review.jsx";

const FilmReviews = (props) => {
  const {filmID} = props;
  const filmComments = comments[filmID];
  const colDelimeterKey = Math.ceil(filmComments.length / 2);

  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {filmComments.slice(0, colDelimeterKey).map((review, i) => <Review review={review} key={review.user + i}/>)}
    </div>
    <div className="movie-card__reviews-col">
      {filmComments.slice(colDelimeterKey).map((review, i) => <Review review={review} key={review.user + i}/>)}
    </div>
  </div>;
};

FilmReviews.propTypes = {
  filmID: PropTypes.number.isRequired
};

export default FilmReviews;
