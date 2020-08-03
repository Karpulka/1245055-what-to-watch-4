import React from "react";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Redirect} from "react-router-dom";

const RedirectToAuth = (props) => {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return <Redirect to="/login" />;
  }

  return ``;
};

RedirectToAuth.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {RedirectToAuth};
export default connect(mapStateToProps)(RedirectToAuth);
