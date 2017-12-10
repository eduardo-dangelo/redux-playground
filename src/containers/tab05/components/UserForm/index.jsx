import React from 'react';
import { Button, FormGroup, ControlLabel } from 'react-bootstrap';
import { Field, FieldArray } from 'redux-form';
import FieldControl from '../../../../components/FieldControl/FieldControl';

class UserForm  extends React.Component {
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
    console.log('fields', fields);
 
    return (
      <div>
        <h3>Config</h3>
        <div className="form-container">
          <Button bsStyle="primary" onClick={this.addField}>
            Add User
          </Button>
          <Button bsStyle="default" onClick={this.removeAll}>
            Remove All
          </Button>
        </div>
        <h3>Users</h3>
        {fields.map((item, key) => {
          return (
            <div key={key} className="form-container">
              <FormGroup>
                <ControlLabel>Name:</ControlLabel>
                <Field
                  name={`user[${key}].name`}
                  placeholder="name"
                  component={FieldControl}
                />
              </FormGroup>
              <Button
                bsStyle="default"
                onClick={this.removeField(key)}
              >
                Remove
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserForm;