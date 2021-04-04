import React from "react";
import { Field } from "react-final-form";
import { required } from "../common/forms/validators";
import { Input } from "../common/forms/fields";
import s from "./Captcha.module.css";

const Captcha = ({ captcha }) => {
  return (
    <div className={s.container}>
      <div className={s.captchaContainer}>
        <img src={captcha} />
      </div>
      <Field
        name="captcha"
        validate={required}
        label="Please enter captcha"
        placeholder="Please input the captcha"
        component={Input}
      />
    </div>
  );
};

export default Captcha;
