import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setCourseDetails } from "../../redux/actions/CourseAction";
import Moment from 'react-moment';
const Details = () => {
  const courseDetails = useSelector(
    (state) => state.CourseReducer.courseDetails
  );
  

  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    dispatch(setCourseDetails(id));
  }, [id]);
  console.log(courseDetails);
  const onInputChange = () => {};
  // if (courseDetails.courseTags.length>1) {
  //  console.log(courseDetails.courseTags.length)
  // }
  return (
    <>
      <form>
        {courseDetails && (
          <>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                value={courseDetails.name || ""}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">desc</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                value={courseDetails.desc || ""}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">price</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                value={courseDetails.price || ""}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">start Date</label>
              <Moment format="YYYY/MM/DD">
              {courseDetails.startDate || ""}
             
            </Moment>
             
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">start Date</label> 
             
              {courseDetails.courseTags &&
              courseDetails.courseTags.length > 1 ? (
                courseDetails.courseTags.map((item) => (
                  <span key={item.tagId} className="category">{item.name || ""}</span>
                ))
              ) : (
                  <span>{courseDetails.courseTags && courseDetails.courseTags[0].name || ""}</span>
              )}
            </div>
          </>
        )}
      </form>
      <Link to={`/courseList`}>
        <p className="btn btn-primary">cancel</p>
      </Link>
    </>
  );
};

export default Details;
