import React, { Component } from 'react';
import { reduxForm, Form, Field } from 'redux-form';

class BasicReduxForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Field name="name" component="input" type="text"/>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'BasicReduxForm' 
})(BasicReduxForm)