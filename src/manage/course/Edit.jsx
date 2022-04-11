import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllTags } from "../../redux/actions/TagAction";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { createCourse } from "../../redux/actions/CourseAction";
import { setAllCategory } from "../../redux/actions/CategoryAction";
import { setCourseDetails } from "../../redux/actions/CourseAction";
import { useParams } from "react-router";
import axios from "axios";
// import DatePicker from "react-datepicker";
import { DatePicker, Space } from "antd";
import moment, { updateLocale } from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";
import "antd/dist/antd.css";
// import { DatePicker, Form, Input } from "antd";
const animatedComponents = makeAnimated();

const Edit = () => {
  const NameRef = useRef();
  const DescRef = useRef();
  const PriceRef = useRef();
  const DateRef = useRef();
  const [selectedOptionss, setSelectedOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [blogCategories, setBlogCategories] = useState([]);

  const allCategory = useSelector((state) => state.CategoryReducer.allCategory);
  const allTags = useSelector((state) => state.TagReducer.allTag);
  const courseDetails = useSelector(
    (state) => state.CourseReducer.courseDetails
  );

  const [startDate, setStartDate] = useState(new Date());

  const [courseUpdate, setCourseUpdate] = useState({});
  // console.log(blogCategories);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setAllTags());
    dispatch(setAllCategory());
    dispatch(setCourseDetails(id));
    axios
      .get(`https://localhost:44305/api/manage/courses/${id}`)
      .then((res) => {
        setCourseUpdate(res.data);
        setBlogCategories( 
          res.data.courseTags.map((item) => {
            return { value: item.tagId, label: item.name };
          })
        );
      });
  }, [id]);
  const dateFormat = "YYYY-MM-DD";
  const star = new Date(moment(courseDetails.startDate).format("L"));
  // console.log(star);
  // console.log(courseDetails.startDate);
  const UpdateForm = (e) => {
    e.preventDefault();

    const UpdateData = {
      Name: NameRef.current.value,
      Desc: DescRef.current.value,
      Price: parseFloat(PriceRef.current.value),
      TagIds: selectedOptionss,
      CategoryId: parseInt(selectedCategory),
      StartDate: "2022-01-01T00:00:00",
    };
    console.log(UpdateData);
    dispatch(createCourse(UpdateData));
    // console.log(CreateData);
  };
  const tags =
    courseDetails.courseTags &&
    courseDetails.courseTags.map((item) => {
      return { value: item.tagId, label: item.name };
    });
  const options = allTags.map((item) => {
    return { value: item.id, label: item.name };
  });

  const handleChange = (blogCategories) => {
    let catArray = [];
    blogCategories.map((o) => catArray.push(o.value));
    setSelectedOptions([...catArray]);
    setBlogCategories(blogCategories)
  };
  const singleSelect = (e) => {
    setSelectedCategory(e.target.value);
  };
  const onInputChange = () => {};
  // console.log(selectedCategory);
  // const starting = new Date(courseDetails.startDate)

  return (
    <div className="col-lg-8">
      <form onSubmit={UpdateForm}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={onInputChange}
            value={courseUpdate.name || ""}
            ref={NameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">DescRef</label>
          <input
            type="input"
            className="form-control"
            onChange={onInputChange}
            defaultValue={courseDetails.desc || ""}
            ref={DescRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">price</label>
          <input type="input" className="form-control" ref={PriceRef} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">date</label>
          {/* <input type="date" defaultValue={courseDetails.startDate} /> */}

          <DatePicker
            // selected={startDate}
            onChange={(date) => setStartDate(date)}
            defaultValue={moment(star, dateFormat)}
            format={dateFormat}
            // <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
          />
        </div>
        <div>
          <Moment format="YYYY/MM/DD">{courseDetails.startDate}</Moment>
        </div>
        <div>
          {/* <DatePicker defaultOpenValue={courseDetails.startDate} /> */}
          {/* <input
            type="date"
            id="start"
            name="trip-start"
            // value = {courseDetails.startDate}
            value="2018-07-22"
            // min="2018-01-01"
            // max="2018-12-31"
          /> */}
        </div>
        <Select
          id="blog-edit-category"
          isClearable={false}
          value={blogCategories}
          isMulti
          name="colors"
          options={options}
          className="react-select"
          classNamePrefix="select"
          onChange={handleChange}
          // onChange={data => setBlogCategories(data)}
        />
        {/* <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={
            courseDetails.courseTags && courseDetails.courseTags.length > 1 ? (
              courseDetails.courseTags.map((item) => ({
                value: item.tagId,
                label: item.name,
              }))
            ) : (
              <span>
                {(courseDetails.courseTags &&
                  courseDetails.courseTags[0].name) ||
                  ""}
              </span>
            )
          }
          isMulti
          options={options}
          onChange={handleChange}
        /> */}
        <select onChange={(e) => singleSelect(e)} className="form-select">
          <option value="DEFAULT" disabled>
            select category:
          </option>
          {allCategory &&
            allCategory.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        {courseDetails.courseTags && courseDetails.courseTags.length > 1 ? (
          courseDetails.courseTags.map((item) => (
            <span key={item.tagId} className="category">
              {item.name || ""}
            </span>
          ))
        ) : (
          <span>
            {(courseDetails.courseTags && courseDetails.courseTags[0].name) ||
              ""}
          </span>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
