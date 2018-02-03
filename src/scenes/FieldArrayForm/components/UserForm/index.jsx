import React from 'react';
import { Button, FormGroup, ControlLabel } from 'react-bootstrap';
import { Field, FieldArray } from 'redux-form';
import FieldControl from '../../../../components/FieldControl/FieldControl';
import Hobby from './components/Hobby';
import { map } from 'lodash';

class UserForm  extends React.Component {
  componentWillMount = () => {
    const { fields } = this.props;

    if (fields.length === 0) {
      fields.push();
    }
  }

  addField = () => {
    const { fields } = this.props;

    fields.push();
  }

  removeAll = () => {
    const { fields } = this.props;

    fields.removeAll();
  }

  removeField = (index) => () => {
    const { fields } = this.props;

    fields.remove(index);
  }

  render() {
    const { fields } = this.props;
    return (
      <div>
        <h3>Config</h3>
        <div className="form-container">
          <Button bsStyle="primary" onClick={this.addField}>
            Add User
          </Button>
          <Button bsStyle="default" className="pull-right" onClick={this.removeAll}>
            Remove All
          </Button>
        </div>
        <h3>Users</h3>
        {map(fields, ((item, key) => {
          return (
            <div key={key}>
              <div className="form-container">
                <FormGroup>
                  <ControlLabel>Name:</ControlLabel>
                  <Field
                    name={`user[${key}].name`}
                    placeholder="name"
                    component={FieldControl}
                  />
                </FormGroup>
                  <FieldArray
                    name={`user[${key}].hobbies`}
                    component={Hobby}
                  />
              </div>
              <Button
                bsStyle="default"
                onClick={this.removeField(key)}
              >
                Remove User
              </Button>
            </div>
          );
        }))}
      </div>
    );
  }
}

export default UserForm;