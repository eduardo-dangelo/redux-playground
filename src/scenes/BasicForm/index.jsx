import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel } from 'react-bootstrap';
import { map, flow } from 'lodash';
import { reduxForm, Form, Field } from 'redux-form';
import FieldControl from '../../components/FieldControl/FieldControl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './reducer';
import './style.scss';

class BasicForm extends Component {
  submitForm = (formValues) => {
    const { actions, dispatch, reset } = this.props;
    actions.submitForm(formValues);
    dispatch(reset('basicForm'));
  }

  render() {
    const { handleSubmit, reset, basicFormValues } = this.props;

    return (
      <Form autocomplete="off" onSubmit={handleSubmit(this.submitForm)}>
        <h1>Basic Form</h1>
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
              displayName="male"
              type="radio"
              component={FieldControl}
            />
            <Field
              name="gender"
              value="female"
              displayName="female"
              type="radio"
              component={FieldControl}
            />
          </FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
          >
            Submit
          </Button>
          <Button
            bsStyle="default"
            onClick={reset}
            className="pull-right"
          >
            Clear Values
          </Button>
        </div>
        {basicFormValues && (
          <div className="form-container">
            <h4>Result</h4>
            {map(basicFormValues, (item, key) => {
              return (
                <p key={key}><strong>{key}:</strong>{' '}{item}</p>
              );
            })}
          </div>
        )}
      </Form>
    );
  }
}

const validate = values => {
  console.log(values)
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'first Name is required';
  }
  if (!values.lastName) {
    errors.lastName = 'last name is required';
  }
  if (!values.email) {
    errors.email = 'email is required';
  }
  if (!values.radio) {
    errors.radio = 'radio is required';
  }
  return errors;
};

export default flow(
  reduxForm({
    form: 'basicForm',
    validate,
  }),
  connect(
    (state) => ({
      basicFormValues: state.basicForm,
    }),
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch),
    }),
  ),
)(BasicForm);