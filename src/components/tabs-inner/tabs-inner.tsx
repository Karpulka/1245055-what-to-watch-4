import * as React from "react";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";
import FilmOverview from "../film-overview/film-overview";
import {TabVariantValues} from "../tabs/tabs";
import {Tab} from "../../types";

interface Props {
  tabValue: Tab;
}

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

export default TabsInner;
