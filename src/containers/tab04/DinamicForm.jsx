import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { reduxForm, Form, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FieldControl from '../../components/FieldControl/FieldControl';
import { actions } from '../../reducers/tab04/DinamicFormReducer';

class DinamicForm extends Component {
  submit = (formValues) => {
    const { dispatch, reset, submitForm } = this.props;
    submitForm(formValues);
    dispatch(reset('dinamicForm'));
  }

  render() {
    const { handleSubmit, reset, firstName, lastName, email, randomQuestionOne, randomQuestionTwo, formValues } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.submit)}>
      <h1>Dinamic Form</h1>
      <h3>Selecting form values</h3>
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
            <FormGroup controlId="random-question-one">
              <ControlLabel>Random Question:</ControlLabel>
              <Field
                name="randomQuestionOne"
                type="radio"
                value="yes"
                displayName="Yes"
                component={FieldControl}
              />
              <Field
                name="randomQuestionOne"
                type="radio"
                value="no"
                displayName="No"
                component={FieldControl}
              />
            </FormGroup>
          )}
          {randomQuestionOne && (
            <FormGroup controlId="random-question-two">
              <ControlLabel>Random Question 2:</ControlLabel>
              <Field
                name="randomQuestionTwo"
                type="radio"
                value="yes"
                displayName="Yes"
                component={FieldControl}
              />
              <Field
                name="randomQuestionTwo"
                type="radio"
                value="no"
                displayName="No"
                component={FieldControl}
              />
            </FormGroup>
          )}
          {randomQuestionTwo && (
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
        {formValues && (
          <div className="form-container">
          <h4>Result</h4>
            {map(formValues, ((item, key) => {
              return <p key={key}><strong>{key}{': '}</strong>{item}</p>;
            }))}
          </div>
        )}
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.dinamicForm,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...actions}, dispatch);
}

DinamicForm = connect(mapStateToProps, mapDispatchToProps)(DinamicForm);

DinamicForm = reduxForm({
  form: 'dinamicForm',
})(DinamicForm);

const selector = formValueSelector('dinamicForm');

DinamicForm = connect(state => {
  const firstName = selector(state, 'firstName');
  const lastName = selector(state, 'lastName');
  const email = selector(state, 'email');
  const randomQuestionOne = selector(state, 'randomQuestionOne');
  const randomQuestionTwo = selector(state, 'randomQuestionTwo');

  return {
    firstName,
    lastName,
    email,
    randomQuestionOne,
    randomQuestionTwo,
  }
})(DinamicForm);

export default DinamicForm;



