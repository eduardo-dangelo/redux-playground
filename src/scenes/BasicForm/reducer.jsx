export const GET_FORM_VALUES = 'GET_FORM_VALUES';
export const RESET_FORM_VALUES = 'RESET_FORM_VALUES';

export function reducer(state = null, action) {
  switch(action.type) {
    case GET_FORM_VALUES:
      return action.payload;

    case RESET_FORM_VALUES:
      return null;
    
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

export function resetForm() {
  return {
    type: RESET_FORM_VALUES,
  }
}
export const actions = {
  submitForm,
  resetForm,
};