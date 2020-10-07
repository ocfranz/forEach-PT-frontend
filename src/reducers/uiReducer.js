import { TOGGLE_MODAL_ADD_TRIP } from "../actions/types";

const initialStateUi = {
  visibleModalAddTrip: false,
};

export const uiReducer = (state = initialStateUi, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_ADD_TRIP:
      return { ...state, visibleModalAddTrip: action.payload };
    default:
      return state;
  }
};
