import * as React from "react";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Redirect} from "react-router-dom";

interface Props {
  authorizationStatus: string,
  children: React.ReactElement
}

const RedirectToAuth: React.FunctionComponent<Props> = (props: Props) => {
  const {authorizationStatus, children} = props;

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return <Redirect to="/login" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {RedirectToAuth};
export default connect(mapStateToProps)(RedirectToAuth);
