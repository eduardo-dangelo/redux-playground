//TAB01

export const ITEM_SELECTED = 'ITEM_SELECTED';

export function selectItem(item) {
  console.log(item);
  return {
    type: ITEM_SELECTED,
    payload: item
  }
}

//TAB 02

// export const SELECT_ITEM_1 = 'SELECT_ITEM_1';
// export const UNSELECT_ITEM_1 = 'UNSELECT_ITEM_1';
// export const SELECT_ITEM_2 = 'SELECT_ITEM_2';
// export const UNSELECT_ITEM_2 = 'UNSELECT_ITEM_2';
// export const SELECT_ITEM_3 = 'SELECT_ITEM_3';
// export const UNSELECT_ITEM_3 = 'UNSELECT_ITEM_3';
// export const SELECT_ALL = 'SELECT_ALL';
// export const UNSELECT_ALL = 'UNSELECT_ALL';



// export function selectItem1(item) {
//   console.log(item);
//   return {
//     type: SELECT_ITEM_1,
//   }
// }

// export function unselectItem1(item) {
//   console.log(item);
//   return {
//     type: UNSELECT_ITEM_1,
//   }
// }
