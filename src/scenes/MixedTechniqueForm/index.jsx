import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CreateUserForm from './components/CreateUserForm';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import { flow } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './reducer';

class MixedTechniqueForm extends Component {
  handleSubmit = (formValues) => {
    const { actions } = this.props;
    actions.submitForm(formValues);
  }

  render() {
    console.log(this.props);
    const { mixedTechniqueForm } = this.props;
    const userSelected = mixedTechniqueForm.userSelected;

    return (
      <div>
        <h2>Mixed Technique Form</h2>
        <Row>
          <Col sm={4}>
            <CreateUserForm onSubmit={this.handleSubmit} />
          </Col>
          <Col sm={4}>
            <UserList formValues={mixedTechniqueForm} />
          </Col>
          <Col sm={4}>
            <UserDetails user={userSelected} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default flow([
  connect(
    (state) => ({
      mixedTechniqueForm: state.mixedTechniqueForm,
    }),
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch),
    }),
  ),
])(MixedTechniqueForm);