import * as React from "react";
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";

const TabVariants = (props) => {
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

TabVariants.propTypes = {
  active: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.shape(), PropTypes.number])
  }).isRequired
};

export default TabVariants;
