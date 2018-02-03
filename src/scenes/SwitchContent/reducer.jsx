const SELECT_ITEM = 'switchContent/SELECT_ITEM';

const initialState = {
  itemList: [
    {
      title: 'Example 01',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac aliquet elit. Phasellus magna velit, interdum et velit vitae, gravida tristique enim.',
    },
    {
      title: 'Example 02',
      info: 'Maecenas ullamcorper lectus id velit bibendum, non dapibus sapien tempus. Donec quis tincidunt metus. Aliquam consectetur enim odio, at interdum arcu blandit sed. Vestibulum et sem felis. Praesent non ex id nunc laoreet molestie. Nunc dictum nibh id maximus luctus. ',
    },
    {
      title: 'Example 03',
      info: 'Morbi sed dignissim metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    },
    {
      title: 'Example 04',
      info: 'Suspendisse at dictum turpis, sed tristique ex. Maecenas a ullamcorper urna. Suspendisse potenti. Morbi eu viverra ante, quis congue elit. Mauris quis feugiat nulla. Quisque dignissim sed elit sit amet egestas. Quisque sit amet maximus purus, ac venenatis ligula.',
    },
    {
      title: 'Example 05',
      info: 'Sed et felis ipsum. Donec vitae ultrices purus. In quam metus, fringilla at aliquam vitae, rhoncus dictum diam. Cras ac nisi libero. Mauris non rutrum enim, non placerat eros. Suspendisse luctus nulla ac mollis auctor.',
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