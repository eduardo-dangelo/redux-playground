import { combineReducers } from 'redux';
import ItemList from '../scenes/ItemList/ItemList_Reducer';
import ItemSelected from '../scenes/ItemList/ItemSelected_Reducer';
import { reducer as states } from '../scenes/BooleanState/BooleanState_Reducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as formValues } from '../scenes/BasicForm/BasicForm_Reducer';
import { reducer as dinamicForm } from '../scenes/DinamicForm/DinamicForm_Reducer';
import { reducer as fieldArrayForm } from '../scenes/FieldArrayForm/FieldArrayForm_Reducer';
import { reducer as loadFromState } from '../scenes/LoadFromState/LoadFromState_Reducer';
import { reducer as wizardFormValues } from '../scenes/WizardForm/WizardForm_Reducer';

const rootReducer = combineReducers({
  form: formReducer,
  itens: ItemList,
  itemSelected: ItemSelected,
  states: states,
  formValues,
  dinamicForm,
  fieldArrayForm,
  loadFromState,
  wizardFormValues,
});

export default rootReducer;
