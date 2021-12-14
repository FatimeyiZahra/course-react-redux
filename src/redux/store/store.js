import { combineReducers } from "redux";
import CourseReducer from "../reducers/CourseReducer"
import CategoryReducer from "../reducers/CategoryReducer"
import TagReducer from "../reducers/TagReducer"
import authreducer from "../reducers/AuthReducer";
const rootReducers= combineReducers({
CourseReducer,
CategoryReducer,
TagReducer,
authreducer
})
export default rootReducers;