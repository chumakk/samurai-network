import React from "react";
import { Field, Form } from "react-final-form";
import { Textarea } from "../../../common/forms/fields";
import s from "./NewPost.module.css";

function NewPost(props) {
  function onCreatePost(newpost) {
    props.createPost(newpost.message);
  }

  return (
    <Form onSubmit={onCreatePost}>
      {(props) => (
        <form
          onSubmit={(e) => {
            props.handleSubmit(e);
            props.form.reset();
          }}
        >
          <Field
            name="message"
            component={Textarea}
            placeholder="How are you?"
          />
          <div>
            <button>Add post</button>
          </div>
        </form>
      )}
    </Form>
  );
}

export default NewPost;
