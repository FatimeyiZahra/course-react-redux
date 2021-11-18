import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setAllCourse = () => dispatch=>{
 axios.get("https://localhost:44305/api/manage/courses")
 .then((res)=>{
   dispatch({type:actionTypes.Set_All_Course,payload:res.data})
 })
};

export const setCourseDetails=(id)=>dispatch=>{
  axios
  .get(`https://localhost:44305/api/manage/courses/${id}`)
  .then((res)=>{
    dispatch({type:actionTypes.Set_Course_Details,payload:res.data})
  })
}
export const createCourse=(CreateData)=>dispatch=>{
  console.log(CreateData);
  axios
  .post(`https://localhost:44305/api/manage/courses`,CreateData)
  .then((res)=>{
    dispatch({type:actionTypes.Create_Course,payload:res.data})
  })
}