import React from 'react';
import { Field } from 'redux-form';
import { Button, FormGroup, ControlLabel, InputGroup } from 'react-bootstrap';
import FieldControl from '../../../../../../components/FieldControl/FieldControl';

class Hobby extends React.Component {
  componentWillMount = () => {
    const { fields } = this.props;

    if (fields.length === 0) {
      fields.push();
    }
  }

  handleAddHobby = () => {
    const { fields } = this.props;

    fields.push();
  }

  handleRemoveHobby = (index) => () => {
    const { fields } = this.props;

    fields.remove(index);
  }

  render () {
    const { fields } = this.props;

    return (
      <div>
        {fields.map((item, key) => {
          return (
            <FormGroup key={key}>
              <ControlLabel>Hobby {key + 1}:</ControlLabel>
              <InputGroup>
                <Field
                  name={item}
                  component={FieldControl}
                />
                <InputGroup.Button>
                  <Button onClick={this.handleRemoveHobby(key)}>Remove</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          );
        })}
        
        <Button bsStyle="primary" onClick={this.handleAddHobby}>
          Add Hobby
        </Button>
      </div>
    );
  }
}

export default Hobby;