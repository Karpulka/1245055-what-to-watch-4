import * as React from "react";
import TabsInner from "../tabs-inner/tabs-inner";
import TabVariants from "../tab-variants/tab-variants";
import {Details, Overview, Tab} from "../../types";

export const TabVariantValues = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

interface Props {
  overview: Overview;
  details: Details;
  onItemClick: () => void;
  activeItem: Tab;
  filmID: number;
}

const Tabs: React.FunctionComponent<Props> = (props: Props) => {
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

export default Tabs;
