import axios from "axios";
import { baseUrl } from "../utilts/url";

class CourseService {
  static setAllCourse = async () => {
    const response = await axios.get(baseUrl + "courses");
    return response;
  };
  static setCourseDetails = async (id) => {
    const response = await axios.get(baseUrl + `courses/${id}`);
    return response;
  };
  static createCourse = async (CreateData) => {
    const response = await axios.post(baseUrl + "courses", CreateData);
    return response;
  };
  static deleteCourse = async (id) => {
    const response = await axios.delete(baseUrl + `courses/${id}`);
    return response;
  };
}
export default CourseService;
