import React from "react";
import PropTypes from "prop-types";
import comments from "../../mocks/comments";
import Review from "../review/review.jsx";

const FilmReviews = (props) => {
  const {filmID} = props;
  const filmComments = comments[filmID];

  if (filmComments && filmComments.length > 0) {
    const colDelimeterKey = filmComments ? Math.ceil(filmComments.length / 2) : 0;

    return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {filmComments.slice(0, colDelimeterKey).map((review, i) => <Review review={review} key={review.user + i}/>)}
      </div>
      <div className="movie-card__reviews-col">
        {filmComments.slice(colDelimeterKey).map((review, i) => <Review review={review} key={review.user + i}/>)}
      </div>
    </div>;
  }

  return null;
};

FilmReviews.propTypes = {
  filmID: PropTypes.number.isRequired
};

export default FilmReviews;
