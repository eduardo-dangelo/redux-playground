export const LOAD_USER = 'loadFromState/LOAD_USER';

const initialState = {
  application: {
    name: '',
    dob: '',
    email: '',
  },
  users: [
    {
      name: 'Carla',
      dob: '10/08/1998',
      email: 'carla@carla.com',
    },
    {
      name: 'Bruna',
      dob: '01/12/1999',
      email: 'bruna@bruna.com',
    },
    {
      name: 'Marta',
      dob: '16/02/2000',
      email: 'marta@marta.com',
    },
  ],
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_USER: 
      return {
        ...state,
        application: action.payload,
      };

    default:
      return state;
  }
}

const loadUser = (user) => ({ type: LOAD_USER, payload: user });

export const actions = {
  loadUser,
}