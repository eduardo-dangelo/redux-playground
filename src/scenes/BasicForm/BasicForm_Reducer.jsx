export const GET_FORM_VALUES = 'GET_FORM_VALUES';

export function reducer(state = null, action) {
  switch(action.type) {
    case GET_FORM_VALUES:
      return action.payload;
    
    default:
      return state;
  }
}

export function submitForm(values) {
  return {
    type: GET_FORM_VALUES,
    payload: values
  }
}

export const actions = {
  submitForm,
};