import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel } from 'react-bootstrap';
import { map } from 'lodash';
import { reduxForm, Form, Field } from 'redux-form';
import FieldControl from '../../components/FieldControl/FieldControl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './BasicForm_Reducer';
import './BasicForm_Style.scss';

class BasicReduxForm extends Component {
  submit = (formValues) => {
    const { submitForm, dispatch, reset } = this.props;
    submitForm(formValues);
    dispatch(reset('basicForm'));
  }

  render() {
    const { handleSubmit, reset, formValues } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.submit)}>
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
  form: 'basicForm',
  validate,
})(BasicReduxForm)