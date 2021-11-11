import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setAllCourse = () => dispatch=>{
 axios.get("https://localhost:44305/api/manage/courses")
 .then((res)=>{
   dispatch({type:actionTypes.Set_All_Course,payload:res.data})
 })
};

export const setCourseDetails=(id)=>dispatch=>{
  // console.log(id)
  axios
  .get(`https://localhost:44305/api/manage/courses/${id}`)
  .then((res)=>{
    dispatch({type:actionTypes.Set_Course_Details,payload:res.data})
  })
}