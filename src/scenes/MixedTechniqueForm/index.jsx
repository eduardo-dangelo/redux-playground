import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CreateUserForm from './components/CreateUserForm';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import { flow } from 'lodash';
import { connect } from 'react-redux';

class MixedTechniqueForm extends Component {
  render() {
    console.log(this.props);
    const { mixedTechniqueForm } = this.props;
    const userSelected = mixedTechniqueForm.userSelected;

    return (
      <div>
        <h2>Mixed Technique Form</h2>
        <Row>
          <Col sm={4}>
            <CreateUserForm />
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
  ),
])(MixedTechniqueForm);