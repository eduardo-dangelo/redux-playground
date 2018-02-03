export const SET_ITEM_1_TRUE = 'BooleanState/SET_ITEM_1_TRUE';
export const SET_ITEM_1_FALSE = 'BooleanState/SET_ITEM_1_FALSE';
export const SET_ITEM_2_TRUE = 'BooleanState/SET_ITEM_2_TRUE';
export const SET_ITEM_2_FALSE = 'BooleanState/SET_ITEM_2_FALSE';
export const SET_ITEM_3_TRUE = 'BooleanState/SET_ITEM_3_TRUE';
export const SET_ITEM_3_FALSE = 'BooleanState/SET_ITEM_3_FALSE';
export const SET_ALL_ITENS_TRUE = 'BooleanState/SET_ALL_ITENS_TRUE';
export const SET_ALL_ITENS_FALSE = 'BooleanState/SET_ALL_ITENS_FALSE';

const initialState = { 
  item1: false,
  item2: false,
  item3: false,
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_ITEM_1_TRUE:
      return {
        ...state,
        item1: true
      };
      
    case SET_ITEM_2_TRUE: 
      return {
        ...state,
        item2: true 
      };
      
    case SET_ITEM_3_TRUE:
      return {
        ...state,
        item3: true
      };
      
    case SET_ITEM_1_FALSE:
      return {
        ...state,
        item1: false
      };
      
    case SET_ITEM_2_FALSE:
      return {
        ...state,
        item2: false
      };
      
    case SET_ITEM_3_FALSE:
      return {
        ...state,
        item3: false
      };
      
    case SET_ALL_ITENS_TRUE:
      return {
        item1: true,
        item2: true,
        item3: true 
      };
      
    case SET_ALL_ITENS_FALSE:
      return {
        item1: false,
        item2: false,
        item3: false 
      };
      
    default:
      return state;
  }
}

const setItemOneTrue = () => ({ type: SET_ITEM_1_TRUE });
const setItemOneFalse = () => ({ type: SET_ITEM_1_FALSE });
const setItemTwoTrue = () => ({ type: SET_ITEM_2_TRUE });
const setItemTwoFalse = () => ({ type: SET_ITEM_2_FALSE });
const setItemThreeTrue = () => ({ type: SET_ITEM_3_TRUE });
const setItemThreeFalse = () => ({ type: SET_ITEM_3_FALSE });
const setAllItensTrue = () => ({ type: SET_ALL_ITENS_TRUE });
const setAllItensFalse = () => ({ type: SET_ALL_ITENS_FALSE });

export const actions = {
  setItemOneTrue,
  setItemOneFalse,
  setItemTwoTrue,
  setItemTwoFalse,
  setItemThreeTrue,
  setItemThreeFalse,
  setAllItensTrue,
  setAllItensFalse
};
