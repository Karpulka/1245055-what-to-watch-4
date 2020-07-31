import React, {PureComponent, createRef} from "react";
import Footer from "../footer/footer.jsx";
import {PageType} from "../app/app.jsx";
import HeaderWrapper from "../header-wrapper/header-wrapper.jsx";
import {Operation} from "../../reducer/user/user";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getErrorMessage, getIsEmailValid} from "../../reducer/user/selectors";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render() {
    const {errorMessage, isEmailValid} = this.props;
    const emailClassName = `sign-in__field${!isEmailValid ? ` sign-in__field--error` : ``}`;

    return <div className="user-page">
      <HeaderWrapper pageType={PageType.AUTH}/>

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

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isEmailValid: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state),
  isEmailValid: getIsEmailValid(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
