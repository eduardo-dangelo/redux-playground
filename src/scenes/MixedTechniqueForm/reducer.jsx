const SUBMIT_FORM = 'mixedTechniqueForm/SUBMIT_FORM';
const SELECT_USER = 'mixedTechniqueForm/SELECT_USER';

const initialState = {
  users: [
    {
      firstName: 'Lara',
      lastName: 'Croft',
      email: 'lara@croft.com',
      gender: 'female',
    },
  ],
  userSelected: {},
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        user: [
          ...state.users,
          action.payload,
        ],
      };
    case SELECT_USER:
      return {
        ...state,
        userSelected: action.payload,
      };
    default:
      return state;
  }
}

const submitForm = (formValues) => {
  console.log(formValues);
};

const selectUser = (user) => ({ type: SELECT_USER, payload: user });

export const actions = {
  submitForm,
  selectUser,
};