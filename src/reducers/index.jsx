import { combineReducers } from 'redux';
import ItemList from './tab01/ItemListReducer';
import ItemSelected from './tab01/ItemSelectedReducer';
import { reducer as states } from './tab02/UpdateStateReducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as formValues } from './tab03/BasicReduxFormReducer';

const rootReducer = combineReducers({
  form: formReducer,
  itens: ItemList,
  itemSelected: ItemSelected,
  states: states,
  formValues,
});

export default rootReducer;
