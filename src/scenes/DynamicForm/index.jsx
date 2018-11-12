import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, flow } from 'lodash';
import { reduxForm, Form, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FieldControl from '../../components/FieldControl/FieldControl';
import { actions } from './reducer';

class DynamicForm extends Component {
  submitForm = (formValues) => {
    const { dispatch, reset, actions } = this.props;

    actions.submitForm(formValues);
    dispatch(reset('dynamicForm'));
  }

  render() {
    const { handleSubmit, reset, firstName, lastName, email, gender, dynamicFormValues } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.submitForm)} autocomplete="off">

        <h1>Dynamic Form</h1>

        <div className="form-container">
          <FormGroup controlId="first-name">
            <ControlLabel>First Name:</ControlLabel>
            <Field
              name="firstName"
              placeholder="first name"
              component={FieldControl}
            />
          </FormGroup>

          {firstName && (
            <FormGroup controlId="last-name">
              <ControlLabel>Last Name:</ControlLabel>
              <Field
                name="lastName"
                placeholder="last name"
                component={FieldControl}
              />
            </FormGroup>
          )}

          {lastName && (
            <FormGroup controlId="email">
              <ControlLabel>Email:</ControlLabel>
              <Field
                name="email"
                placeholder="email"
                component={FieldControl}
              />
            </FormGroup>
          )}

          {email && (
            <FormGroup controlId="gender">
              <ControlLabel>gender:</ControlLabel>
              <Field
                name="gender"
                type="radio"
                value="male"
                displayName="male"
                component={FieldControl}
              />
              <Field
                name="gender"
                type="radio"
                value="female"
                displayName="female"
                component={FieldControl}
              />
            </FormGroup>
          )}

          {gender && (
            <div>
              <Button
                type="submit"
                bsStyle="primary"
              >
                Submit
              </Button>
              <Button
                className="pull-right"
                onClick={reset}
                bsStyle="default"
              >
                Clear values
              </Button>
            </div>
          )}
        </div>

        {dynamicFormValues && (
          <div className="form-container">
            <h4>Result</h4>
            {map(dynamicFormValues, ((item, key) => {
              return (
                <p key={key}><strong>{key}:</strong>{' '}{item}</p>
              );
            }))}
          </div>
        )}
      </Form>
    );
  }
}

let selector;

export default flow(
  reduxForm({
    form: 'dynamicForm',
  }),
  (component) => {
    selector = formValueSelector('dynamicForm');

    return component;
  },
  connect(
    (state) => {
      const firstName = selector(state, 'firstName');
      const lastName = selector(state, 'lastName');
      const email = selector(state, 'email');
      const gender = selector(state, 'gender');

      return {
        firstName,
        lastName,
        email,
        gender,
        dynamicFormValues: state.dynamicForm,
      };
    },
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch),
    })
  ),
)(DynamicForm);



