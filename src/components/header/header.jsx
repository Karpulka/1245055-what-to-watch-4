import React from "react";
import PropTypes from "prop-types";
import {PageType} from "../app/app.jsx";
import HeaderAuth from "../header-auth/header-auth.jsx";
import HeaderMovie from "../header-movie/header-movie.jsx";

const Header = (props) => {
  const {pageType, isBreadcrumbs} = props;

  if (pageType === PageType.AUTH) {
    return <HeaderAuth />;
  }

  return <HeaderMovie isBreadcrumbs={isBreadcrumbs}/>;
};

Header.propTypes = {
  pageType: PropTypes.string.isRequired,
  isBreadcrumbs: PropTypes.bool
};

export default Header;
