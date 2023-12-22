export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_REMEMBER = "MEMORY_REMEMBER";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export default {
  addOne: () => {
    return { type: ADD_ONE };
  },
  applyNumber: (number) => {
    return { type: APPLY_NUMBER, payload: number };
  },
  changeOperation: (operator) => {
    return { type: CHANGE_OPERATION, payload: operator };
  },
  clearDisplay: () => {
    return { type: CLEAR_DISPLAY };
  },
  memoryAdd: () => {
    return { type: MEMORY_ADD };
  },
  memoryRemember: () => {
    return { type: MEMORY_REMEMBER };
  },
  memoryClear: () => {
    return { type: MEMORY_CLEAR };
  },
};
