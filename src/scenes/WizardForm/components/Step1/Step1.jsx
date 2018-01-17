import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FieldControl from '../../../../components/FieldControl/FieldControl';

class Step1 extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
      <h3>Step 1</h3>
        <div className="form-container">
          <FormGroup controlId="name">
            <ControlLabel>Name:</ControlLabel>
            <Field
              name="name"
              component={FieldControl}
            />
          </FormGroup>
          <div className="btn-bar">
            <Button
              bsStyle="primary"
              className="pull-right"
              type="submit"
            >
              Next
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'field is required';
  }

  return errors;
}

export default reduxForm({
  form: 'wizard-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Step1);