import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {PageType} from "../app/app.jsx";

const HeaderWrapper = (props) => {
  const {pageType} = props;

  return <header className={`page-header ${pageType === PageType.AUTH ? `user-page__head` : `movie-card__head`}`}>
    <div className="logo">
      <a href="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    <Header pageType={pageType} />
  </header>;
};

HeaderWrapper.propTypes = {
  pageType: PropTypes.string.isRequired
};

export default HeaderWrapper;
