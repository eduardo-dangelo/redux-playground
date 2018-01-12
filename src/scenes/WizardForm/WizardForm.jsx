import React, { Component } from 'react';
import WizardNavigation from './components/WizardNavigation/WizardNavigation';
import { Form, Field, reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FieldControl from '../../components/FieldControl/FieldControl';

class WizardForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <h2>Wizard Form</h2>
        <WizardNavigation />

        <div className="form-container">
          <FormGroup controlId="name">
            <ControlLabel>Name:</ControlLabel>
            <Field
              name="name"
              component={FieldControl}
            />
          </FormGroup>
          <FormGroup controlId="dob">
            <ControlLabel>Date of birth:</ControlLabel>
            <Field
              name="dob"
              component={FieldControl}
            />
          </FormGroup>
          <Button bsStyle="primary pull-right">Next</Button>
        </div>
      </Form>
    );
  }
}

WizardForm = reduxForm({
  form: 'wizard-form',
})(WizardForm);

export default WizardForm;