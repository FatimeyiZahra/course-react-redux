import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setAllCategory } from "../../redux/actions/CategoryAction";

const CategoryList = () => {
  const allCategories = useSelector(
    (state) => state.CategoryReducer.allCategory.data
  );
  console.log(allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllCategory());
  }, []);

//   if(allCategories){
//       allCategories.map(item=>(
      
//       ))
//   }
  return (
    <>
    {/* <h2>{allCategories.totalPage}</h2> */}
      {allCategories &&
        allCategories.map((item) => (
          <li key={item.id} className="nav-item dropdown">
            <Link to={`/category/${item.id}`} className="nav-link">
              {item.name}
            </Link>
          </li>
        ))}
    </>
  );
};

export default CategoryList;
