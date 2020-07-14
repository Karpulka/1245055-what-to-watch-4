import React from "react";
import PropTypes from "prop-types";
import FilmDetails from "../film-details/film-details.jsx";
import FilmReviews from "../film-reviews/film-reviews.jsx";
import FilmOverview from "../film-overview/film-overview.jsx";

const TabsInner = (props) => {
  const {overview, details, filmID, isDetails, isReviews} = props;

  if (isDetails) {
    return <FilmDetails details={details}/>;
  }

  if (isReviews) {
    return <FilmReviews filmID={filmID}/>;
  }

  return <FilmOverview overview={overview}/>;
};

TabsInner.propTypes = {
  overview: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    voiceCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  details: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired
  }).isRequired,
  filmID: PropTypes.number.isRequired,
  isDetails: PropTypes.bool.isRequired,
  isReviews: PropTypes.bool.isRequired
};

export default TabsInner;
