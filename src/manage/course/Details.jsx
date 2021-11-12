import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setCourseDetails } from "../../redux/actions/CourseAction";

const Details = () => {
  const courseDetails = useSelector(
    (state) => state.CourseReducer.courseDetails
  );
  console.log(courseDetails);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(setCourseDetails(id));
  }, [id]);
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
                value={courseDetails.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">desc</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                value={courseDetails.desc}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">price</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                value={courseDetails.price}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">start Date</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                value={courseDetails.startDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">start Date</label>
              {courseDetails.courseTags &&
              courseDetails.courseTags.length > 1 ? (
                courseDetails.courseTags.map((item) => (
                  <span className="category">{item.name}</span>
                ))
              ) : (
                  <span>{courseDetails.courseTags &&courseDetails.courseTags[0].name}</span>
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
