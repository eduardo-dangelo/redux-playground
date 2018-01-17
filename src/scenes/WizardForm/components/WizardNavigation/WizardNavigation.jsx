import React, { Component } from 'react';
import './style.scss';

class WizardNavigation extends Component {
  render() {
    const { step, onClickStep1, onclickStep2, onclickStep3 } = this.props;
    return (
      <div className="wizard-navigation">
        <ul>
          <li>
            <div className="wizard-navigation-btn" onClick={onClickStep1}>
              Step 1
            </div>
          </li>
          <li>
            <div className={ step >= 2 ? 'wizard-navigation-btn' : 'wizard-navigation-btn disabled' } onClick={ onclickStep2 }>
              Step 2
            </div>
          </li>
          <li>
            <div className={ step >= 3 ? 'wizard-navigation-btn' : 'wizard-navigation-btn disabled' } onClick={ onclickStep3 }>
              Step 3
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default WizardNavigation;