const SUBMIT_FORM = 'wizardForm/SUBMIT_FORM';
const NEXT_STEP = 'wizardForm/NEXT_STEP';
const PREV_STEP = 'wizardForm/PREV_STEP';
const GO_TO_PAGE = 'wizardForm/GO_TO_PAGE';

const initialState = {
  step: 1,
  page: 1,
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        application: action.payload,
      };

    case NEXT_STEP:
      return action.payload;

    case PREV_STEP:
      return {
        ...state,
        page: action.payload,
      };

    case GO_TO_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
}

const nextStep = (step, page) => {
  let payload = {};

  if (page === step) {
    payload = { step: step + 1, page: page + 1 }
  }

  if (page < step) {
    payload = { step: step, page: page + 1 }
  }

  return { type: NEXT_STEP, payload: payload }
};

const prevStep = (page) => ({ type: PREV_STEP, payload: page - 1 });
const submitForm = (formValues) => ({ type: SUBMIT_FORM, payload: formValues });
const goToPage = (page) => ({ type: GO_TO_PAGE, payload: page });

export const actions = {
  submitForm,
  nextStep,
  prevStep,
  goToPage,
}