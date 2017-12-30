import React, { Component } from 'react';
import { Form, FieldArray, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import UserForm from './components/UserForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './Reducer';
import { map } from 'lodash';

class FieldArrayForm extends Component {
  submit = (formValues) => {
    console.log('submit', formValues);
    const { submitForm, reset, dispatch } = this.props;
    submitForm(formValues);
    dispatch(reset('fieldArrayForm'));
  }

  render() {
    const { handleSubmit, formValues } = this.props;
    console.log('formValues', formValues);
 
    return (
      <Form onSubmit={handleSubmit(this.submit)}>
        <h1>Field Array Form</h1>
        <FieldArray name="user" component={UserForm}/>
        <div>
          <div className="form-container">
            <Button type="submit" bsStyle="primary" block>
              Submit
            </Button>
          </div>
        </div>
        {formValues && (
          <div className="form-container">
            <h4>Result</h4>
            {map(formValues.user, (item, key) => {
              return <div key="key">{key}</div>
            })}
          </div>
        )}
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.fieldArrayForm,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...actions}, dispatch);
}

FieldArrayForm = connect(mapStateToProps, mapDispatchToProps)(FieldArrayForm);

FieldArrayForm = reduxForm({
  form: 'fieldArrayForm',
})(FieldArrayForm);

export default FieldArrayForm;