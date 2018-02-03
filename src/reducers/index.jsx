import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as booleanStates } from '../scenes/BooleanState/reducer';
import { reducer as basicForm } from '../scenes/BasicForm/reducer';
import { reducer as dynamicForm } from '../scenes/DynamicForm/reducer';
import { reducer as fieldArrayForm } from '../scenes/FieldArrayForm/reducer';
import { reducer as loadFromState } from '../scenes/LoadFromState/reducer';
import { reducer as wizardForm } from '../scenes/WizardForm/reducer';
import { reducer as mixedTechniqueForm } from '../scenes/MixedTechniqueForm/reducer';
import { reducer as switchContent } from '../scenes/SwitchContent/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  switchContent,
  booleanStates,
  basicForm,
  dynamicForm,
  fieldArrayForm,
  loadFromState,
  wizardForm,
  mixedTechniqueForm,
});

export default rootReducer;
