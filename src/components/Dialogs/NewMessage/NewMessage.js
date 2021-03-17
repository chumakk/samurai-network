import React from "react";
import { Field, Form } from "react-final-form";
import {textarea} from "../../common/forms/fields"
import s from "./NewMessage.module.css";

export function NewMessage(props) {

  function onCreateNewMessage(form) {
    props.createNewMessage(form.message);
  }

  return (
    <Form onSubmit={onCreateNewMessage}>
      {(props) => (
        <form onSubmit={(e)=>{
          props.handleSubmit(e);
          props.form.reset();
        }}>
          <Field
            name="message"
            component={textarea}
            placeholder="Enter the message"
          />
          <div>
            <button>Send</button>
          </div>
        </form>
      )}
    </Form>
  );
  // return (
  //   <div className={s.inputMessage}>
  //     <div>
  //       <textarea value={props.newMessageText} onChange={onChangeNewMessage} />
  //     </div>
  //     <div>
  //       <button onClick={onCreateNewMessage}>Отпавить</button>
  //     </div>
  //   </div>
  // );
}

export default NewMessage;
