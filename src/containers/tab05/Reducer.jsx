export const SUBMIT_FORM = 'fildArrayFrom/SUBMIT_FORM';

export function reducer(state = null, action) {
  switch(action.type) {
    case SUBMIT_FORM:
      return action.payload;

    default:
      return state;
  }
}

export function submitForm(formValues) {
  return { type: SUBMIT_FORM, payload: formValues }
}

export const actions = {
  submitForm,
};