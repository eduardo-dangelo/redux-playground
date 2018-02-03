import React, { Component } from 'react';
import { Form, FieldArray, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import UserForm from './components/UserForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './reducer';
import { map, flow } from 'lodash';
import './style.scss';

class FieldArrayForm extends Component {
  submitForm = (formValues) => {
    const { actions, reset, dispatch } = this.props;
    actions.submitForm(formValues);
    dispatch(reset('fieldArrayForm'));
  }

  render() {
    const { handleSubmit, fieldArrayFormValues } = this.props;
 
    return (
      <Form onSubmit={handleSubmit(this.submitForm)}>
        <h1>Field Array Form</h1>
        <FieldArray name="user" component={UserForm}/>
        <div>
          <div className="form-container">
            <Button type="submit" bsStyle="primary" block>
              Submit
            </Button>
          </div>
        </div>

        {fieldArrayFormValues && (
          <div className="form-container">
            <h4>Result</h4>
            {map(fieldArrayFormValues.user, (item, key) => {
              return (
                <div key={key} className="user-section">
                  <h4>User {key + 1}</h4>
                  <p><strong>Name:</strong> {item.name}</p>
                  {item.hobbies && (
                    map(item.hobbies, (hobby, key) => {
                      return <p key={key}><strong>Hobby {key + 1}:</strong> {hobby}</p>
                    })
                  )}
                </div>
              )})}
          </div>
        )}
      </Form>
    );
  }
}

export default flow(
  reduxForm({
    form: 'fieldArrayForm',
  }),
  connect(
    (state) => ({
      fieldArrayFormValues: state.fieldArrayForm,
    }),
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch),
    })
  ),
)(FieldArrayForm);