import { UserInputTypes } from "./userInput.types";

export const userInputCity = (city) => ({
  type: UserInputTypes.SAVE_USER_INPUT,
  payload: city,
});
