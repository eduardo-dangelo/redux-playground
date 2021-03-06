import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import FieldControl from '../../components/FieldControl/FieldControl';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { actions } from './reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map, flow } from 'lodash';


class LoadFromState extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { change } = this.props;

    if (nextProps.loadFromState) {
      change('name', nextProps.loadFromState.application.name);
      change('dob', nextProps.loadFromState.application.dob);
      change('email', nextProps.loadFromState.application.email);
    }
  }

  handleLoadUserClick = (user) => () => {
    const { actions } = this.props;

    actions.loadUser(user);
  }

  render () {
    const { handleSubmit, loadFromState } = this.props;

    return (
      <Form autocomplete="off" onSubmit={handleSubmit}>
        <h1>Load from State</h1>
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
          <FormGroup controlId="Email">
            <ControlLabel>Email:</ControlLabel>
            <Field
              name="email"
              component={FieldControl}
            />
          </FormGroup>
        </div>
        {map(loadFromState.users, (user, key) => {
          return (
            <div key={key}>
              <h4>User {(key + 1)}</h4>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Date of birth:</strong> {user.dob}</p>
              <p><strong>email:</strong> {user.email}</p>
              <Button onClick={this.handleLoadUserClick(user)}>Load user</Button>
            </div>
          );
        })}
      </Form>
    )
  }
}

export default flow(
  reduxForm({
    form: 'loadFromStateForm'
  }),
  connect(
    (state) => ({
      loadFromState: state.loadFromState,
    }),
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch),
    }),
  ),
)(LoadFromState);