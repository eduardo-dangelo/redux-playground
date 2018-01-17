import React, { Component } from 'react';
import WizardNavigation from './components/WizardNavigation/WizardNavigation';
import './style.scss';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';

class WizardForm extends Component {
  state = {
    step: 1,
    page: 1
  };

  nextStep = () => {
    if ( this.state.step === this.state.page ) {
      this.setState({
        step: this.state.step + 1,
        page: this.state.page + 1,
      });
    }

    if ( this.state.step > this.state.page ) {
      this.setState({
        page: this.state.page + 1,
      });
    }
  }

  prevStep = () => {
    this.setState({
      page: this.state.page - 1,
    });
  }

  handleSubmit = (formValues) => {
    console.log(formValues);
  }

  handleClickStep1 = () => {
    this.setState({
      page: 1,
    });
  }

  handleClickStep2 = () => {
    this.setState({
      page: 2,
    });
  }

  handleClickStep3 = () => {
    this.setState({
      page: 3,
    });
  }

  render() {
    const { step, page } = this.state;

    return (
      <div>
        <h2>Wizard Form</h2>
        <WizardNavigation
          step={step}
          onClickStep1={this.handleClickStep1}
          onclickStep2={this.handleClickStep2}
          onclickStep3={this.handleClickStep3}
        />

        { page === 1 && (
          <Step1 onSubmit={this.nextStep} />
        )}

        { page === 2 && (
          <Step2 onSubmit={this.nextStep} onClickBack={this.prevStep} />
        )}

        { page === 3 && (
          <Step3 onSubmit={this.handleSubmit} onClickBack={this.prevStep} />
        )}

      </div>
    );
  }
}

export default WizardForm;