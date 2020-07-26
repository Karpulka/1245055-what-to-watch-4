import React from "react";
import PropTypes from "prop-types";

const TabVariants = (props) => {
  const {active, onTabClick, tab} = props;
  const {title} = tab;
  let itemClassName = `movie-nav__item`;
  if (active === title) {
    itemClassName += ` movie-nav__item--active`;
  }

  return <li className={itemClassName}>
    <a href="#" className="movie-nav__link" onClick={(evt) => {
      evt.preventDefault();
      onTabClick(tab);
    }}>{title}</a>
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
