import * as React from "react";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";
import FilmOverview from "../film-overview/film-overview";
import {TabVariantValues} from "../tabs/tabs";
import {Tab} from "../../types";

interface Props {
  tabValue: Tab;
}

const TabsInner: React.FunctionComponent<Props> = (props: Props) => {
  const {tabValue: {title, details, id, overview}} = props;

  if (title === TabVariantValues.DETAILS) {
    return <FilmDetails details={details}/>;
  }

  if (title === TabVariantValues.REVIEWS) {
    return <FilmReviews filmID={id}/>;
  }

  return <FilmOverview overview={overview}/>;
};

export default TabsInner;
