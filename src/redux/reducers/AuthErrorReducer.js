import * as actionTypes from "../actions/actionTypes";
const authErrorState = {
    statusCode:""
};
const AuthErrorReducer = (state = authErrorState, action) => {
  switch (action.type) {
      case actionTypes.Login_Fail:
        return {...state,statusCode:action.payload}
      
    default:
      return state;
  }
};


export default AuthErrorReducer;
