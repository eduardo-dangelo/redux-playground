import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CreateUserForm from './components/CreateUserForm';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

class MixedTechniqueForm extends Component {
  hanldeSubmit = (formValues) => {
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <h2>Mixed Thechnique Form</h2>
        <Row>
          <Col sm={4}>
            <CreateUserForm onSubmit={this.hanldeSubmit} />
          </Col>
          <Col sm={4}>
            <UserList />
          </Col>
          <Col sm={4}>
            <UserDetails />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MixedTechniqueForm;