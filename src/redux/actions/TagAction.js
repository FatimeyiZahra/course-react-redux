import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setAllTags = () => dispatch=>{
 axios.get("https://localhost:44305/api/manage/tags/all")
 .then((res)=>{
   dispatch({type:actionTypes.Set_All_Tags,payload:res.data})
 })
};