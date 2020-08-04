import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.jsx";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

const Header = (props) => {
  const {auth, isBreadcrumbs, pageTitle, isAvatar} = props;

  return <React.Fragment>
    {isBreadcrumbs ? <Breadcrumbs /> : ``}
    {pageTitle ? <h1 className="page-title user-page__title">{pageTitle}</h1> : ``}
    {isAvatar ? <div className="user-block">
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
  isAvatar: true,
  pageTitle: ``
};

Header.propTypes = {
  auth: PropTypes.string.isRequired,
  isBreadcrumbs: PropTypes.bool,
  isAvatar: PropTypes.bool,
  pageTitle: PropTypes.string
};

const mapStateToProps = (state) => ({
  auth: getAuthorizationStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
