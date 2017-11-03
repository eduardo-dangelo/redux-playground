import { combineReducers } from 'redux';
import ItemList from './tab01/ItemListReducer';
import ItemSelected from './tab01/ItemSelectedReducer';
import { reducer as states } from './tab02/UpdateStateReducer';

const rootReducer = combineReducers({
  itens: ItemList,
  itemSelected: ItemSelected,
  states: states,
});

export default rootReducer;
