import * as actionTypes from "./actionTypes";
import axios from "axios";
import CategoryService from "../../services/CategoryService";
export const setAllCategory = () => async (dispatch) => {
  try {
    const response = await CategoryService.getAllCategory();
    dispatch({ type: actionTypes.Set_All_Category, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

// export const setAllCategory = () => dispatch=>{
//   axios.get("https://localhost:44305/api/manage/categories/all")
//   .then((res)=>{
//     dispatch({type:actionTypes.Set_All_Category,payload:res.data})
//   })
//  };
