import React from "react";
import s from "./fields.module.css";

export const Textarea = (props) => {
  return (
    <div className={props.meta.error && !props.meta.active && props.meta.touched ? null : null}>
      <textarea {...props.input} className={s.input} placeholder={props.placeholder} />
      {!props.meta.active && props.meta.error && props.meta.touched && (
        <div className={s.error}>{props.meta.error}</div>
      )}
    </div>
  );
};

export const Input = (props) => {
  return (
    <div className={props.meta.error && !props.meta.active && props.meta.touched ? s.inputContainerError : s.inputContainer}>
      <label>{props.label} </label>
      <input {...props.input} className={s.input} placeholder={props.placeholder} />
      {!props.meta.active && props.meta.error && props.meta.touched && (
        <div className={s.error}>{props.meta.error}</div>
      )}
    </div>
  );
};

export const Checkbox = (props) => {
  return (
    <div className={s.checkboxContainer}>
      <input {...props.input} />
      <label> {props.label}</label>
    </div>
  );
};
