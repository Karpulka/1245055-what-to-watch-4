import React from "react";
import PropTypes from "prop-types";
import FilmDetails from "../film-details/film-details.jsx";
import FilmReviews from "../film-reviews/film-reviews.jsx";
import FilmOverview from "../film-overview/film-overview.jsx";
import {TabVariantValues} from "../tabs/tabs.jsx";

const TabsInner = (props) => {
  const {tabValue: {title, value}} = props;

  if (title === TabVariantValues.DETAILS) {
    return <FilmDetails details={value}/>;
  }

  if (title === TabVariantValues.REVIEWS) {
    return <FilmReviews filmID={value}/>;
  }

  return <FilmOverview overview={value}/>;
};

TabsInner.propTypes = {
  tabValue: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.shape(), PropTypes.number])
  }).isRequired
};

export default TabsInner;
