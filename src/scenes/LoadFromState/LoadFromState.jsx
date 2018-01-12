import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import FieldControl from '../../components/FieldControl/FieldControl';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { actions } from './LoadFromState_Reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class LoadFromState extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { change } = this.props;

    if (nextProps.loadUserAccount) {
      change('name', nextProps.loadUserAccount.name);
      change('dob', nextProps.loadUserAccount.dob);
      change('email', nextProps.loadUserAccount.email);
    }
  }

  handleLoadUserClick = (user) => () => {
    const { loadUser } = this.props;
    loadUser(user);
  }

  render () {
    const { handleSubmit } = this.props;
  
    const users = {
      carla: {
        name: 'Carla',
        dob: '10/08/1998',
        email: 'carla@carla.com',
      },
      bruna: {
        name: 'Bruna',
        dob: '01/12/1999',
        email: 'bruna@bruna.com',
      },
      marta: {
        name: 'Marta',
        dob: '16/02/2000',
        email: 'marta@marta.com',
      },
    };

    return (
      <Form onSubmit={handleSubmit}>
        <h2>Load from State</h2>
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
        <div>
          <h4>User 1</h4>
          <p><strong>Name:</strong> Carla</p>
          <p><strong>Date of birth</strong> 10/08/1998</p>
          <p><strong>email</strong> bruna@bruna.com</p>
          <Button onClick={this.handleLoadUserClick(users.carla)}>Load user</Button>  
        </div>
        <div>
          <h4>User 2</h4>
          <p><strong>Name:</strong> Bruna</p>
          <p><strong>Date of birth</strong> 01/12/1999</p>
          <p><strong>email</strong> carla@carla.com</p>
          <Button onClick={this.handleLoadUserClick(users.bruna)}>Load user</Button>  
        </div>
        <div>
          <h4>User 3</h4>
          <p><strong>Name:</strong> Marta</p>
          <p><strong>Date of birth</strong> 16/02/2000</p>
          <p><strong>email</strong> marta@marta.com</p>
          <Button onClick={this.handleLoadUserClick(users.marta)}>Load user</Button>  
        </div>
      </Form>
    )
  }
}

LoadFromState = reduxForm({
  form: 'loadFromStateForm'
})(LoadFromState);

function mapStateToProps(state) {
  return { loadUserAccount: state.loadFromState }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...actions}, dispatch);
}

LoadFromState = connect(mapStateToProps, mapDispatchToProps)(LoadFromState);

export default LoadFromState;