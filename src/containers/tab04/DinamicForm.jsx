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
          <Field 
            id="firstName"
            name="firstName"
            label="First Name:"
            placeholder="first name"
            component={FieldControl}
          />
          {firstName && (
            <Field
              id="lastName"
              name="lastName"
              label="Last Name:"
              placeholder="last name"
              component={FieldControl}
            />
          )}
          {lastName && (
            <Field
              id="email"
              name="email"
              label="Email Address:"
              placeholder="email"
              component={FieldControl}
            />
          )}
          {email && (
            <FormGroup controlId="randomQuestionOne">
            <ControlLabel>Random Question:</ControlLabel>
              <div>
                <label>
                  <Field
                    name="randomQuestionOne"
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
                    name="randomQuestionOne"
                    value="no"
                    type="radio"
                    component="input"
                  />
                  {'  '}
                  no
                </label>
              </div>
            </FormGroup>
          )}
          {randomQuestionOne && (
            <FormGroup controlId="randomQuestionTwo">
            <ControlLabel>Random Question:</ControlLabel>
              <div>
                <label>
                  <Field
                    name="randomQuestionTwo"
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
                    name="randomQuestionTwo"
                    value="no"
                    type="radio"
                    component="input"
                  />
                  {'  '}
                  no
                </label>
              </div>
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



