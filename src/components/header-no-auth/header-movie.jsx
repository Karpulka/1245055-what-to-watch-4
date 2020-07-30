import React from "react";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const HeaderMovie = (props) => {
  const {isAuth} = props;

  return <div className="user-block">
    {isAuth === AuthorizationStatus.AUTH ? <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
    </div> : <a href="/login" className="user-block__link">Sign in</a>}
  </div>;
};

HeaderMovie.propTypes = {
  isAuth: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isAuth: getAuthorizationStatus(state)
});

export {HeaderMovie};
export default connect(mapStateToProps)(HeaderMovie);
