import * as React from "react";
import {connect} from "react-redux";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

interface Props {
  auth: string,
  isBreadcrumbs: boolean,
  isUserBlock: boolean,
  pageTitle?: string,
  breadcrumbTitle?: string,
  filmID?: number
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {auth, isBreadcrumbs, pageTitle, isUserBlock, filmID, breadcrumbTitle} = props;

  return <React.Fragment>
    {isBreadcrumbs ? <Breadcrumbs id={filmID} title={breadcrumbTitle}/> : ``}
    {pageTitle ? <h1 className="page-title user-page__title">{pageTitle}</h1> : ``}
    {isUserBlock ? <div className="user-block">
      {auth === AuthorizationStatus.AUTH ? <div className="user-block__avatar">
        <Link to="/mylist">
          <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </Link>
      </div> : <Link to="/login" className="user-block__link">Sign in</Link>}
    </div> : ``}
  </React.Fragment>;
};

Header.defaultProps = {
  isBreadcrumbs: false,
  isUserBlock: true,
  pageTitle: ``
};

const mapStateToProps = (state) => ({
  auth: getAuthorizationStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
