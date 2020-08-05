import * as React from "react";
import * as PropTypes from "prop-types";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";
import FilmOverview from "../film-overview/film-overview";
import {TabVariantValues} from "../tabs/tabs";

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
