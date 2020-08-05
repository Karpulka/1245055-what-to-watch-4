import * as React from "react";
import Header from "../header/header";
import {PageType} from "../app/app";
import {Link} from "react-router-dom";

interface Props {
  pageType: string,
  isBreadcrumbs?: boolean,
  id?: number,
  filmID?: number,
  pageTitle?: string,
  breadcrumbTitle?: string,
  isUserBlock?: boolean
}

const HeaderWrapper: React.FunctionComponent<Props> = (props: Props) => {
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

HeaderWrapper.defaultProps = {
  isUserBlock: true,
  isBreadcrumbs: false
}

export default HeaderWrapper;
