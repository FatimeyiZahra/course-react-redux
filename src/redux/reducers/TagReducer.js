import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allTag: [],
};

const TagReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Set_All_Tags:
      return { ...state, allTag: action.payload };
    default:
      return state;
  }
};

export default TagReducer;
