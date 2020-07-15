import React from "react";
import PropTypes from "prop-types";

const TabVariants = (props) => {
  const {title, active, onTabClick} = props;
  let itemClassName = `movie-nav__item`;
  if (active) {
    itemClassName += ` movie-nav__item--active`;
  }

  return <li className={itemClassName}>
    <a href="#" className="movie-nav__link" onClick={onTabClick}>{title}</a>
  </li>;
};

TabVariants.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default TabVariants;
