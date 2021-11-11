import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setAllCategory = () => dispatch=>{
 axios.get("https://localhost:44305/api/manage/Categories")
 .then((res)=>{
   dispatch({type:actionTypes.Set_All_Category,payload:res.data})
 })
};
