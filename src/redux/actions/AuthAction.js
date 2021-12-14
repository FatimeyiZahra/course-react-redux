import  axios  from "axios";
import * as actionType from "./actionTypes";
export const authAction = (loginData, push)=>dispatch=> {
      axios
      .post("https://localhost:44305/api/manage/accounts/login", loginData)
      .then((res)=>{
        dispatch({type:actionType.Login_Succes,payload:res.data})
        push(`/courseList`);
      })
    //   .catch(err => dispatch(getErrors(err.response.data)));
  }

