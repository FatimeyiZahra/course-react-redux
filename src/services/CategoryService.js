import { baseUrl } from "../utilts/url";
import axios from "axios";

class CategoryService {
  static getAllCategory = async () => {
    const response = await axios.get(baseUrl + "categories/all");
    return response;
  };
}
export default CategoryService;
