import { UserInputTypes } from "./userInput.types";

const INITIAL_STATE = {
  city: null,
};

export const userInputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserInputTypes.SAVE_USER_INPUT:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
