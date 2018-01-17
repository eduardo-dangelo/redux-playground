import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FieldControl from '../../../../components/FieldControl/FieldControl';

class Step2 extends Component {
  render() {
    const { handleSubmit, onClickBack } = this.props;
    
    return (
      <Form onSubmit={handleSubmit}>
      <h3>Step 2</h3>
        <div className="form-container">
          <FormGroup controlId="name">
            <ControlLabel>Date of birth:</ControlLabel>
            <Field
              name="dob"
              component={FieldControl}
            />
          </FormGroup>
          <div className="btn-bar">
            <Button
              bsStyle="primary"
              onClick={onClickBack}
            >
              Back
            </Button>
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

  if (!values.dob) {
    errors.dob = 'field is required';
  }

  return errors;
}

export default reduxForm({
  form: 'wizard-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Step2);