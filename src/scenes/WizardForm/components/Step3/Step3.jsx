import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FieldControl from '../../../../components/FieldControl/FieldControl';

class Step3 extends Component {
  render() {
    const { handleSubmit, onClickBack } = this.props;
    
    return (
      <Form onSubmit={handleSubmit}>
      <h3>Step 3</h3>
        <div className="form-container">
          <FormGroup controlId="name">
            <ControlLabel>Email:</ControlLabel>
            <Field
              name="email"
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
              Submit
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'field is required';
  }

  return errors;
}

export default reduxForm({
  form: 'wizard-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Step3);