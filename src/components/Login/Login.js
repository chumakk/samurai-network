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
import { checkbox, input } from "../common/forms/fields";
import s from "./Login.module.css";

function Login(props) {
  const onSubmit = (formObject) => {
    props.loginTC(formObject.email, formObject.password, formObject.rememberMe);
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
              <div className={s.buttonWrapper}>
                <button
                  type="submit"
                  disabled={props.hasValidationErrors}
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
  loginTC,
})(Login);
