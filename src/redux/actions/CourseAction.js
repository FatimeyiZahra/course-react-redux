import * as actionTypes from "./actionTypes";
import axios from "axios";
import { Redirect } from "react-router-dom";
import CourseService from "../../services/CourseService";

export const setAllCourse = () => async (dispatch) => {
  try {
    const response = await CourseService.setAllCourse();
    dispatch({ type: actionTypes.Set_All_Course, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const setCourseDetails = (id) => async (dispatch) => {
  try {
    const response = await CourseService.setCourseDetails(id);
    dispatch({ type: actionTypes.Set_Course_Details, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
export const createCourse = (CreateData, push) => async (dispatch) => {
  console.log(CreateData);
  try {
    const response = await CourseService.createCourse(CreateData);
    dispatch({ type: actionTypes.Create_Course, payload: response.data });
    push(`/courseList`);
  } catch (error) {
    console.log(error);
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
    const response = await CourseService.deleteCourse(id);
    dispatch({ type: actionTypes.Delete_Course, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export function handleError(error) {
  switch (error.response.status) {
    case 404:
      <Redirect to="/error" />;

      break;
    default:
      return console.log("asda");
  }
}
