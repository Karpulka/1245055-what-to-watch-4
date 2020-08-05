import * as React from "react";
import * as PropTypes from "prop-types";
import Header from "../header/header";
import {PageType} from "../app/app";
import {Link} from "react-router-dom";

const HeaderWrapper = (props) => {
  const {pageType} = props;

  return <header className={`page-header ${pageType === PageType.AUTH ? `user-page__head` : `movie-card__head`}`}>
    <div className="logo">
      <Link to="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>

    <Header {...props}/>
  </header>;
};

HeaderWrapper.propTypes = {
  pageType: PropTypes.string.isRequired,
  isBreadcrumbs: PropTypes.bool,
  id: PropTypes.number,
  pageTitle: PropTypes.string,
  breadcrumbTitle: PropTypes.string
};

export default HeaderWrapper;
