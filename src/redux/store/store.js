import { combineReducers } from "redux";
import CourseReducer from "../reducers/CourseReducer"
import CategoryReducer from "../reducers/CategoryReducer"
import TagReducer from "../reducers/TagReducer"
const rootReducers= combineReducers({
CourseReducer,
CategoryReducer,
TagReducer
})
export default rootReducers;