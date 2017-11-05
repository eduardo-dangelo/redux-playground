import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { reduxForm, Form, Field } from 'redux-form';
import FieldControl from '../../components/FieldControl/FieldControl';
import './BasicReduxForm.scss';

class BasicReduxForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <h1>Basic Form</h1>
        <div className="form-container">
          <Field
            id="controlId-name"
            name="name"
            type="text"
            label="First Name:"
            placeholder="First Name"
            component={FieldControl}
          />
          <Field
            id="controlId-lastName"
            name="lastName"
            type="text"
            label="Last Name:"
            placeholder="Last Name"
            component={FieldControl}
          />
          <Field
            id="controlId-email"
            name="email"
            type="email"
            label="Email Address:"
            placeholder="email"
            component={FieldControl}
          />
          <Button
            type="submit"
            bsStyle="default"
            disabled={pristine || submitting}
          >
            Submit
          </Button>
          <Button
            bsStyle="default"
            onClick={reset}
            disabled={pristine || submitting}
          >
            Clear Values
          </Button>
        </div>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'BasicReduxForm' 
})(BasicReduxForm)