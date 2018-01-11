export const LOAD_USER = 'LOAD_USER';

const initialState = {
    name: '',
    dob: '',
    email: '',
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_USER: 
      return action.payload;

    default:
      return state;
  }
}

export function loadUser(user) {
  console.log('user', user);
  return { type: LOAD_USER, payload: user };
}

export const actions = {
  loadUser,
}