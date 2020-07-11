import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmDetails from "../film-details/film-details.jsx";
import FilmReviews from "../film-reviews/film-reviews.jsx";
import FilmOverview from "../film-overview/film-overview.jsx";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOverview: true,
      isDetails: false,
      isReviews: false
    };
  }

  render() {
    const {overview, details} = this.props;
    const {isDetails, isReviews} = this.state;

    if (isDetails) {
      return <FilmDetails details={details}/>;
    }

    if (isReviews) {
      return <FilmReviews/>;
    }

    return <FilmOverview overview={overview}/>;
  }
}

Tabs.propTypes = {
  overview: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    voiceCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.string.isRequired
  }).isRequired,
  details: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired
  }).isRequired
};

export default Tabs;
