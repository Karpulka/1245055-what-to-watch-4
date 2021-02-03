import * as React from "react";
import Footer from "../footer/footer";
import {PageType} from "../app/app";
import HeaderWrapper from "../header-wrapper/header-wrapper";
import {Operation} from "../../reducer/user/user";
import {connect} from "react-redux";
import {getErrorMessage, getIsEmailValid, getAuthorizationStatus, getIsEndLoadData} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Redirect} from "react-router-dom";

interface Props {
  login: (parameter: {login: string; password: string}) => void;
  errorMessage?: string;
  isEmailValid: boolean;
  authorizationStatus: string;
  isEndLoadData: boolean;
}

class SignIn extends React.PureComponent<Props, {}> {
  private emailRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render() {
    const {errorMessage, isEmailValid, authorizationStatus, isEndLoadData} = this.props;

    if (!isEndLoadData) {
      return null;
    }

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Redirect to="/" />;
    }

    const emailClassName = `sign-in__field${!isEmailValid ? ` sign-in__field--error` : ``}`;

    return <div className="user-page">
      <HeaderWrapper pageType={PageType.AUTH} pageTitle={`Sign In`} isUserBlock={false}/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {errorMessage ? <div className="sign-in__message">
            <p>{errorMessage}</p>
          </div> : ``}
          <div className="sign-in__fields">
            <div className={emailClassName}>
              <input className="sign-in__input" ref={this.emailRef} type="email" placeholder="Email address" name="user-email" id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" ref={this.passwordRef} type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={this.handleFormSubmit}>Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>;
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    const {login} = this.props;

    login({
      login: this.emailRef.current.value,
      password: this.passwordRef.current.value
    });
  }
}

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state),
  isEmailValid: getIsEmailValid(state),
  authorizationStatus: getAuthorizationStatus(state),
  isEndLoadData: getIsEndLoadData(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
