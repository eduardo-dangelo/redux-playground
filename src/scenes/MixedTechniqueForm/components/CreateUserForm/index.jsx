import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FieldControl from '../../../../components/FieldControl/FieldControl';
import { actions } from '../../reducer';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { flow } from 'lodash';

class CreateUserForm extends Component {
  submitForm = (formValues) => {
    const { dispatch, reset, actions } = this.props;
    actions.submitForm(formValues);
    dispatch(reset('createUserForm'));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form autocomplete="off" onSubmit={handleSubmit(this.submitForm)}>
      <h3>Create User</h3>
        <div className="form-container">
          <FormGroup controlId="first-name">
            <ControlLabel>First Name:</ControlLabel>
              <Field
                name="firstName"
                type="text"
                placeholder="First Name"
                component={FieldControl}
              />
          </FormGroup>
          <FormGroup controlId="lastName">
            <ControlLabel>Last Name:</ControlLabel>
              <Field
                name="lastName"
                type="text"
                placeholder="Last Name"
                component={FieldControl}
              />
          </FormGroup>
          <FormGroup controlId="email">
            <ControlLabel>Email:</ControlLabel>
            <Field
              name="email"
              placeholder="email"
              component={FieldControl}
            />
          </FormGroup>
          <FormGroup controlId="radio">
            <ControlLabel>Gender:</ControlLabel>
            <Field
              name="gender"
              value="male"
              displayName="Male"
              type="radio"
              component={FieldControl}
            />
            <Field
              name="gender"
              value="female"
              displayName="Female"
              type="radio"
              component={FieldControl}
            />
          </FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
          >
            Create User
          </Button>
        </div>
      </Form>
    );
  }
}

export default flow([
  reduxForm({
    form: 'createUserForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  }),
  connect(
    (state) => ({
      mixedTechniqueForm: state.mixedTechniqueForm,
    }),
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch),
    }),
  ),
])(CreateUserForm);