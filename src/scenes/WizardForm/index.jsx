import React, { Component } from 'react';
import WizardNavigation from './components/WizardNavigation/WizardNavigation';
import './style.scss';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import { actions } from './reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map } from 'lodash';

class WizardForm extends Component {
  nextStep = () => {
    const { actions, wizardFormValues } = this.props;
    const step = wizardFormValues.step;
    const page = wizardFormValues.page;

    actions.nextStep(step, page);
  }

  prevStep = () => {
    const { actions, wizardFormValues } = this.props;
    const page = wizardFormValues.page;

    actions.prevStep(page);
  }

  handleSubmit = (formValues) => {
    const { actions } = this.props;

    actions.submitForm(formValues);
  }

  handleWizardNavigation = (page) => {
    const { actions } = this.props;

    actions.goToPage(page);
  }

  render() {
    const { wizardFormValues } = this.props;

    return (
      <div>
        <h2>Wizard Form</h2>
        <WizardNavigation
          step={wizardFormValues.step}
          onClickStep1={() => this.handleWizardNavigation(1)}
          onclickStep2={() => this.handleWizardNavigation(2)}
          onclickStep3={() => this.handleWizardNavigation(3)}
        />

        {wizardFormValues.page === 1 && (
          <Step1 onSubmit={this.nextStep} />
        )}

        {wizardFormValues.page === 2 && (
          <Step2 onSubmit={this.nextStep} onClickBack={this.prevStep} />
        )}

        {wizardFormValues.page === 3 && (
          <Step3 onSubmit={this.handleSubmit} onClickBack={this.prevStep} />
        )}

        {wizardFormValues.application && (
          <div className="form-container">
            {map(wizardFormValues.application, (item, key) => {
              return (
                <div key={key}>
                  <strong>{key}{': '}</strong>{item}
                </div>
              );
            })}
          </div>
        )}

      </div>
    );
  }
}

export default connect(
  (state) => ({
    wizardFormValues: state.wizardForm,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  })
)(WizardForm);