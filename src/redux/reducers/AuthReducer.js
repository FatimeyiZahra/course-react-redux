import axios from "axios";
import * as actionTypes from "../actions/actionTypes";
import jwt_decode from "jwt-decode";
const authState = {
  isLoggedIn: false,
  token: [],
};
const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authobj = JSON.parse(auth);
  
    const  jwttoken  = authobj.token;
    // console.log(jwttoken)
    // if (new Date(expires_at) > new Date()) {
    //   axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
    //   return authobj; 
    
    // }
    if (auth) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
        // console.log(axios.defaults.headers)
        return authobj; 
      
      }
    return authState;
  } catch (error) {
    return authState;
  }
};
// console.log(getAuthState())

const newAuth= getAuthState();
const authreducer = (state = newAuth, action) => {
  switch (action.type) {
    case actionTypes.Login_Succes:
      const NewAuthState = {
        isLoggedIn: true,
        token: action.payload,
      };
      localStorage.setItem("auth", JSON.stringify(NewAuthState));
      return NewAuthState;
    default:
      return state;
  }
};


export default authreducer;
