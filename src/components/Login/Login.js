import React from "react";
import { connect } from "react-redux";
import { authTC } from "../../state/auth-reducer";
import { Field, Form } from "react-final-form";
import {
  composeValidators,
  required,
  isEmail,
} from "../common/forms/validators";
import { Redirect } from "react-router-dom";
import { checkbox, input } from "../common/forms/fields";
import { authAPI } from "../../api/api";
import { FORM_ERROR } from "final-form";
import s from "./Login.module.css";

function Login(props) {
  const onSubmit = async (formObject) => {

    const data = await authAPI.login(
      formObject.email,
      formObject.password,
      formObject.rememberMe
    );

    if (data.resultCode === 0) {
      props.authTC();
    } else {
      return { [FORM_ERROR]: data.messages[0] };
    }
    
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div className={s.container}>
        <div className={s.title}>Sing in</div>
        <Form onSubmit={onSubmit}>
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Field
                name="email"
                validate={composeValidators(required, isEmail)}
                component={input}
                label="Email"
                placeholder="email"
                class={s.input}
              />
              <Field
                name="password"
                validate={required}
                label="Password"
                placeholder="password"
                component={input}
              />
              <Field
                name="rememberMe"
                label="remember me"
                type="checkbox"
                component={checkbox}
              />
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
});

export default connect(mapStateToProps, {
  authTC,
})(Login);
