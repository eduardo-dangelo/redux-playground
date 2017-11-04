import React, { Component } from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import FieldControl from '../../components/FieldControl/FieldControl';

class BasicReduxForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
      <h1>Basic Form</h1>
        <Field
          name="name"
          type="text"
          label="First Name:"
          placeholder="First Name"
          component={FieldControl}
        />
        <Field
          name="name"
          type="text"
          label="Last Name:"
          placeholder="Last Name"
          component={FieldControl}
        />
        <Field
          name="name"
          type="email"
          label="Email Address:"
          placeholder="email"
          component={FieldControl}
        />
      </Form>
    );
  }
}

export default reduxForm({
  form: 'BasicReduxForm' 
})(BasicReduxForm)