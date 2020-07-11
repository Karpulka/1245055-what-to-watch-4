import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmDetails from "../film-details/film-details.jsx";
import FilmReviews from "../film-reviews/film-reviews.jsx";
import FilmOverview from "../film-overview/film-overview.jsx";

class TabsInner extends PureComponent {
  render() {
    const {overview, details, isDetails, isReviews} = this.props;

    if (isDetails) {
      return <FilmDetails details={details}/>;
    }

    if (isReviews) {
      return <FilmReviews/>;
    }

    return <FilmOverview overview={overview}/>;
  }
}

TabsInner.propTypes = {
  overview: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
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
  isDetails: PropTypes.bool.isRequired,
  isReviews: PropTypes.bool.isRequired
};

export default TabsInner;
