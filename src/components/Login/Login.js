import React from "react";
import { connect } from "react-redux";
import { loginTC } from "../../state/auth-reducer";
import { Field, Form } from "react-final-form";
import {
  composeValidators,
  required,
  isEmail,
} from "../common/forms/validators";
import { Redirect } from "react-router-dom";
import { Checkbox, Input } from "../common/forms/fields";
import { FORM_ERROR } from "final-form";
import s from "./Login.module.css";
import Captcha from "./Captcha";

function Login(props) {
  const onSubmit = async (formObject) => {
    try {
      const req = await props.loginTC(
        formObject.email,
        formObject.password,
        formObject.rememberMe,
        formObject.captcha
      );
      if (req) {
        return { [FORM_ERROR]: [req] };
      }
    } catch (error) {
      return { [FORM_ERROR]: [`${error}`] };
    }
  };

  const captcha = props.captcha;

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div className={s.container}>
        <div className={s.title}>Sing in</div>
        <Form onSubmit={onSubmit}>
          {(props) => (
            <form onSubmit={props.handleSubmit} className={s.form}>
              <Field
                name="email"
                validate={composeValidators(required, isEmail)}
                component={Input}
                label="Email"
                placeholder="email"
                class={s.input}
              />
              <Field
                name="password"
                validate={required}
                label="Password"
                placeholder="password"
                component={Input}
              />
              <Field
                name="rememberMe"
                label="remember me"
                type="checkbox"
                component={Checkbox}
              />
              {captcha && <Captcha captcha={captcha} />}
              {props.submitError && (
                <div className={s.error}>{props.submitError}</div>
              )}
              <div className={s.buttonWrapper}>
                <button
                  type="submit"
                  disabled={props.hasValidationErrors || props.submitting}
                  className={s.submitButton}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
});

export default connect(mapStateToProps, {
  loginTC,
})(Login);
