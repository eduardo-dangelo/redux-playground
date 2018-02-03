import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as states } from '../scenes/BooleanState/reducer';
import { reducer as formValues } from '../scenes/BasicForm/reducer';
import { reducer as dinamicForm } from '../scenes/DinamicForm/DinamicForm_Reducer';
import { reducer as fieldArrayForm } from '../scenes/FieldArrayForm/FieldArrayForm_Reducer';
import { reducer as loadFromState } from '../scenes/LoadFromState/LoadFromState_Reducer';
import { reducer as wizardFormValues } from '../scenes/WizardForm/WizardForm_Reducer';
import { reducer as  mixedTechniqueForm } from '../scenes/MixedTechniqueForm/reducer';
import { reducer as switchContent } from '../scenes/SwitchContent/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  switchContent,
  states: states,
  formValues,
  dinamicForm,
  fieldArrayForm,
  loadFromState,
  wizardFormValues,
  mixedTechniqueForm,
});

export default rootReducer;
