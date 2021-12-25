import axios from "axios";
import * as actionType from "./actionTypes";
export const authAction = (loginData, push) => (dispatch) => {
  axios
    .post("https://localhost:44305/api/manage/accounts/login", loginData)
    .then((res) => {
      dispatch({ type: actionType.Login_Succes, payload: res.data });
      push(`/courseList`);
      // window.location.reload();
    })
    // .catch((handleError));
    .catch((error) => dispatch({type:actionType.Login_Fail,payload:error.response.status}));

  // dispatch({type:actionType.Login_Fail,payload:{error.response.status}}))
};
// err.response.data
export const LogoutAction = (push) => (dispatch) => {
  dispatch({ type: actionType.Logout_Succes, payload: {} });
  push(`/`);
};

// export function handleError(error) {
//   switch (error.response.status) {
//     case 400:
//       console.log("cant");
//       break;
//     case 201:
//       console.log("succes");
//       break;
//     case 404:
//       // history.push(`/courseList`);
//       console.log("not found");
//       break;
//     case 401:
//       console.log("name or passwor dis incorrect");
//       break;
//     default:
//       return console.log("asda");
//   }
// }
