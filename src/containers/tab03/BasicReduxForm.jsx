import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, Label } from 'react-bootstrap';
import { map } from 'lodash';
import { reduxForm, Form, Field, SubmissionError } from 'redux-form';
import FieldControl from '../../components/FieldControl/FieldControl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../reducers/tab03/BasicReduxFormReducer';
import './BasicReduxForm.scss';

class BasicReduxForm extends Component {

  submit = (values) => {
    const { submitForm } = this.props;
    console.log('values', values);
    submitForm(values);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, formValues } = this.props;
    console.log('formValues', formValues);

    return (
      <Form onSubmit={handleSubmit(this.submit)}>
        <h1>Basic Form</h1>
        <div className="form-container">
          <Field
            id="controlId-name"
            name="firstName"
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
            label="Email Address:"
            placeholder="email"
            component={FieldControl}
          />
          <FormGroup controlId="radio">
          <ControlLabel>Random Question:</ControlLabel>
          <div>
            <label>
              <Field
                controlId="radio-group"
                name="radio"
                value="yes"
                type="radio"
                component="input"
              />
              {'  '}
              yes
            </label>
          </div>
          <div>
            <label>
              <Field
                controlId="radio-group"
                name="radio"
                value="no"
                type="radio"
                component="input"
              />
              {'  '}
              no
            </label>
          </div>
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
        {formValues && (
          <div className="form-container">
            <h4>Result</h4>
            {map(formValues, (item, key) => {
              return (<p key={key}><strong>{key}</strong>{' '}{item}</p>);
            })}
          </div>
        )}
      </Form>
    );
  }
}

const validate = values => {
  const { firstName, lastName, email } = values;
  const errors = {};
  if (!firstName || firstName.trim() === '') {
    errors.firstName = 'first Name is required';
  }
  if (!lastName || lastName.trim() === '') {
    errors.lastName = 'last name is required';
  }
  if (!email || email.trim() === '') {
    errors.email = 'email is required';
  }
  return errors;
  console.log('errors', errors);
}

function mapStateToProps(state) {
  return {
    formValues: state.formValues,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

BasicReduxForm = connect(mapStateToProps, mapDispatchToProps)(BasicReduxForm);

export default reduxForm({
  form: 'basicReduxForm',
  validate,
})(BasicReduxForm)