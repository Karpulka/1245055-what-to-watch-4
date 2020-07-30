import React from "react";
import PropTypes from "prop-types";
import {PageType} from "../app/app.jsx";
import HeaderAuth from "../header-auth/header-auth.jsx";
import HeaderMovie from "../header-no-auth/header-movie.jsx";

const Header = (props) => {
  const {pageType} = props;

  if (pageType === PageType.AUTH) {
    return <HeaderAuth />;
  }

  return <HeaderMovie />;
};

Header.propTypes = {
  pageType: PropTypes.string.isRequired
};

export default Header;
