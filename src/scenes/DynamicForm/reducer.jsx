const SUBMIT_FORM = 'DynamicForm/SUBMIT_FORM';

export function reducer(state = null, action) {
  switch(action.type) {
    case SUBMIT_FORM:
      return action.payload;

    default:
      return state;
  }
}

const submitForm = (formValues) => ({ type: SUBMIT_FORM, payload: formValues });

export const actions = {
  submitForm,
};