import React from "react";
import { connect } from "react-redux";
import { Field, Form } from "react-final-form";
import { profileAPI } from "../../../../api/api";
import { FORM_ERROR } from "final-form";
import { setProfileInfoAC } from "../../../../state/profile-reducer";
import s from "./ProfileForm.module.css";
import Initialize from "../../../Initialize/Initialize";

const ProfileForm = (props) => {
  const onSubmit = async (obj) => {
    try {
      const response = await profileAPI.updateProfile(obj);

      if (response.status !== 200) return;

      if (response.data.messages.length) {
        return { [FORM_ERROR]: combineErrors(response.data.messages) };
      } else {
        const profile = await profileAPI.getProfile(obj.userId);
        props.setProfileInfoAC(profile);
      }

      props.setEditMode(false);
    } catch (e) {
      return { [FORM_ERROR]: [`${e}`]};
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        userId: props.profile.userId,
        fullName: props.profile.fullName,
        lookingForAJob: `${props.profile.lookingForAJob}`,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
        aboutMe: props.profile.aboutMe,
        contacts: {
          github: props.profile.contacts.github,
          vk: props.profile.contacts.vk,
          facebook: props.profile.contacts.facebook,
          instagram: props.profile.contacts.instagram,
          twitter: props.profile.contacts.twitter,
          website: props.profile.contacts.website,
          youtube: props.profile.contacts.youtube,
          mainLink: props.profile.contacts.mainLink,
        },
      }}
      render={({
        handleSubmit,
        submitting,
        submitError,
      }) => (
        <form onSubmit={handleSubmit} className={s.form}>
          {submitting && <Initialize />}
          <Field name="fullName" label="Full Name" render={Input} />
          <div className={s.radioWrapper}>
            <div className={s.radioTitle}>lookingForAJob</div>
            <div className={s.radioOption}>
              <Field
                name="lookingForAJob"
                label="looking"
                type="radio"
                value={"true"}
                render={Radio}
              />
              <Field
                name="lookingForAJob"
                label="no looking"
                type="radio"
                value={"false"}
                render={Radio}
              />
            </div>
          </div>
          <Field
            name="lookingForAJobDescription"
            label="lookingForAJobDescription"
            render={Input}
          />
          <div className={s.aboutMe}>
            <Field name="aboutMe" label="aboutMe" render={Textarea} />
          </div>

          <div className={s.contactsWrapper}>
            <div className={s.contactsTitle}>Conctacts</div>
            <div className={s.contacts}>
              <Field name="contacts.github" label="github" render={Input} />
              <Field name="contacts.vk" label="vk" render={Input} />
              <Field name="contacts.facebook" label="facebook" render={Input} />
              <Field
                name="contacts.instagram"
                label="instagram"
                render={Input}
              />
              <Field name="contacts.twitter" label="twitter" render={Input} />
              <Field name="contacts.website" label="website" render={Input} />
              <Field name="contacts.youtube" label="youtube" render={Input} />
              <Field name="contacts.mainLink" label="mainLink" render={Input} />
            </div>
          </div>
          {submitError && <div className={s.submitErrors}>{submitError}</div>}
          <div className={s.buttonWrapper}>
            <button className={s.submit} disabled={submitting}>
              Save
            </button>
          </div>
        </form>
      )}
    />
  );
};

export const Input = (props) => {
  return (
    <div
      className={
        props.meta.error && !props.meta.active && props.meta.touched
          ? s.inputContainerError
          : s.inputContainer
      }
    >
      <div className={s.labelWrapper}>
        <span>{props.label} </span>
      </div>
      <div>
        <input
          {...props.input}
          className={s.input}
          placeholder={props.placeholder}
        />
      </div>
      {!props.meta.active && props.meta.error && props.meta.touched && (
        <div className={s.error}>{props.meta.error}</div>
      )}
    </div>
  );
};

export const Radio = (props) => {
  return (
    <div className={s.checkboxContainer}>
      <input {...props.input} />
      <label> {props.label}</label>
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <div
      className={
        props.meta.error && !props.meta.active && props.meta.touched
          ? s.inputContainerError
          : s.inputContainer
      }
    >
      <span>{props.label} </span>
      <textarea
        {...props.input}
        className={s.input}
        placeholder={props.placeholder}
      />
      {!props.meta.active && props.meta.error && props.meta.touched && (
        <div className={s.error}>{props.meta.error}</div>
      )}
    </div>
  );
};

const Error = ({ message }) => {
  return <div>{message}</div>;
};

const combineErrors = (array) => {
  return array.map((u) => <Error key={u} message={u} />);
};

export default connect(null, {
  setProfileInfoAC,
})(ProfileForm);
