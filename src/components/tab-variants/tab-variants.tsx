import * as React from "react";
import {Link} from "react-router-dom";
import {Tab} from "../../types";

interface Props {
  active: string;
  onTabClick: (tabTitle: Tab) => void;
  tab: Tab;
}

const TabVariants: React.FunctionComponent<Props> = (props: Props) => {
  const {active, onTabClick, tab} = props;
  const {title} = tab;
  let itemClassName = `movie-nav__item`;
  if (active === title) {
    itemClassName += ` movie-nav__item--active`;
  }

  return <li className={itemClassName}>
    <Link to="#" className="movie-nav__link" onClick={(evt) => {
      evt.preventDefault();
      onTabClick(tab);
    }}>{title}</Link>
  </li>;
};

export default TabVariants;
