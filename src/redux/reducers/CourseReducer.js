import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allCourse: [],
  courseDetails: [],
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Set_All_Course:
      return { ...state, allCourse: action.payload };

    case actionTypes.Set_Course_Details:
      return { ...state, courseDetails: action.payload };
    default:
      return state;
  }
};

export default CourseReducer;
