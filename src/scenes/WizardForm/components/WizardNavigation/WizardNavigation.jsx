import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './style.scss';

class WizardNavigation extends Component {
  render() {
    const { step, onClickStep1, onclickStep2, onclickStep3 } = this.props;
    return (
      <div className="wizard-navigation">
        <ButtonGroup>
          <Button bsStyle="primary" onClick={onClickStep1}>Step 1</Button>
          <Button bsStyle="primary" onClick={onclickStep2} disabled={step < 2}>Step 2</Button>
          <Button bsStyle="primary" onClick={onclickStep3} disabled={step < 3}>Step 3</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default WizardNavigation;