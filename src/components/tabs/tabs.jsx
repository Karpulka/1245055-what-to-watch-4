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
  const {overview, details, filmID, activeItem, onItemClick} = props;

  const tabVariants = [
    {
      title: `Overview`,
      value: overview
    },
    {
      title: `Details`,
      value: details
    },
    {
      title: `Reviews`,
      value: filmID
    },
  ];

  return <React.Fragment>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabVariants.map((tab, i) => <TabVariants
          key={tab.title + i}
          active={activeItem ? activeItem.title : tabVariants[0].title}
          tab={tab}
          onTabClick={onItemClick}
        />)}
      </ul>
    </nav>
    <TabsInner tabValue={activeItem || tabVariants[0]}/>
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
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.shape(), PropTypes.number])
  }),
  filmID: PropTypes.number.isRequired
};

export default Tabs;
