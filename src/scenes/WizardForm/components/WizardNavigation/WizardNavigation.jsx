import React, { Component } from 'react';
import './style.scss';

class WizardNavigation extends Component {
  render() {
    return (
      <div className="wizard-navigation">
        <ul>
          <li>
            <div className="wizard-navigation-btn">
              Step 1
            </div>
          </li>
          <li>
            <div className="wizard-navigation-btn disabled">
              Step 2
            </div>
          </li>
          <li>
            <div className="wizard-navigation-btn disabled">
              Step 3
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default WizardNavigation;