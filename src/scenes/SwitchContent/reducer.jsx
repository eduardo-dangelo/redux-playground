const SELECT_ITEM = 'switchContent/SELECT_ITEM';

const initialState = {
  itemList: [
    {
      title: 'some title 01',
      info: 'some info here',
    },
    {
      title: 'some title 02',
      info: 'some info here too',
    },
    {
      title: 'some title 03',
      info: 'some info here again',
    },
  ],
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        itemSelected: action.payload,
      }
    default:
      return state;
  }
}

const selectItem = (item) => ({ type: SELECT_ITEM, payload: item });

export const actions = {
  selectItem,
};