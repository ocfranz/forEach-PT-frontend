import {
  TOGGLE_MODAL_ADD_TRIP,
  TOGGLE_MODAL_ADD_EMPLOYEE,
} from "../actions/types";

const initialStateUi = {
  visibleModalAddTrip: false,
  visibleModalAddEmployee: false,
};

export const uiReducer = (state = initialStateUi, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_ADD_TRIP:
      return { ...state, visibleModalAddTrip: action.payload };
    case TOGGLE_MODAL_ADD_EMPLOYEE:
      return { ...state, visibleModalAddEmployee: action.payload };
    default:
      return state;
  }
};
