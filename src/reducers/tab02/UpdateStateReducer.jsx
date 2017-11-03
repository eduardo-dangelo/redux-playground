export const SELECT_ITEM_1 = 'SELECT_ITEM_1';
export const UNSELECT_ITEM_1 = 'UNSELECT_ITEM_1';
export const SELECT_ITEM_2 = 'SELECT_ITEM_2';
export const UNSELECT_ITEM_2 = 'UNSELECT_ITEM_2';
export const SELECT_ITEM_3 = 'SELECT_ITEM_3';
export const UNSELECT_ITEM_3 = 'UNSELECT_ITEM_3';
export const SELECT_ALL = 'SELECT_ALL';
export const UNSELECT_ALL = 'UNSELECT_ALL';

const initialState = { 
  item1: false,
  item2: false,
  item3: false,
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_ITEM_1:
      return {
        ...state,
        item1: true
      };
    
    case SELECT_ITEM_2: 
      return {
        ...state,
        item2: true 
      };
  
    case SELECT_ITEM_3:
      return {
        ...state,
        item3: true
      };
    
    case UNSELECT_ITEM_1:
      return {
        ...state,
        item1: false
      };
    
    case UNSELECT_ITEM_2:
      return {
        ...state,
        item2: false
      };
    
    case UNSELECT_ITEM_3:
      return {
        ...state,
        item3: false
      };
    
    case SELECT_ALL:
      return {
        item1: true,
        item2: true,
        item3: true 
      };
    
    case UNSELECT_ALL:
      return {
        item1: false,
        item2: false,
        item3: false 
      };
    
    default:
      return state;
    
  }
}

// actions

const selectItem1 = () => {
  return { type: SELECT_ITEM_1 };
}

const unselectItem1 = () => {
  return { type: UNSELECT_ITEM_1 };
}

const selectItem2 = () => {
  return { type: SELECT_ITEM_2 };
}

const unselectItem2 = () => {
  return { type: UNSELECT_ITEM_2 };
}

const selectItem3 = () => {
  return { type: SELECT_ITEM_3 };
}

const unselectItem3 = () => {
  return { type: UNSELECT_ITEM_3 };
}

const selectAll = () => {
  return { type: SELECT_ALL };
}

const unselectAll = () => {
  return { type: UNSELECT_ALL };
}

export const actions = {
  selectItem1,
  unselectItem1,
  selectItem2,
  unselectItem2,
  selectItem3,
  unselectItem3,
  selectAll,
  unselectAll
};
