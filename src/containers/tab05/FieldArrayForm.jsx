import React, { Component } from 'react';
import { Form, FieldArray, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import UserForm from './components/UserForm';

class FieldArrayForm extends Component {
  submit = (formValues) => {
    console.log('submit', formValues);
  }

  render() {
    const { handleSubmit } = this.props;
 
    return (
      <Form onSubmit={handleSubmit(this.submit)}>
        <h1>Field Array Form</h1>
        <FieldArray name="user" component={UserForm}/>
        <div>
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

FieldArrayForm = reduxForm({
  form: 'fieldArrayForm',
})(FieldArrayForm);

export default FieldArrayForm;