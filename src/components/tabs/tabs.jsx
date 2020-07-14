import React from "react";
import TabsInner from "../tabs-inner/tabs-inner.jsx";
import PropTypes from "prop-types";
import TabVariants from "../tab-variants/tab-variants.jsx";

export const TabVariantValues = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const Tabs = (props) => {
  const {overview, details, filmID, isOverview, isDetails, isReviews, onTabClick} = props;

  const tabVariants = [
    {
      title: `Overview`,
      active: isOverview
    },
    {
      title: `Details`,
      active: isDetails
    },
    {
      title: `Reviews`,
      active: isReviews
    },
  ];

  return <React.Fragment>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabVariants.map((tab, i) => <TabVariants
          key={tab.title + i}
          title={tab.title}
          active={tab.active}
          onTabClick={onTabClick}
        />)}
      </ul>
    </nav>
    <TabsInner overview={overview} details={details} filmID={filmID} isOverview={isOverview} isDetails={isDetails} isReviews={isReviews}/>
  </React.Fragment>;
};

Tabs.propTypes = {
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
  isOverview: PropTypes.bool.isRequired,
  isDetails: PropTypes.bool.isRequired,
  isReviews: PropTypes.bool.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default Tabs;
