import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllTags } from "../../redux/actions/TagAction";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { createCourse } from "../../redux/actions/CourseAction";
import { setAllCategory } from "../../redux/actions/CategoryAction";
import { setCourseDetails } from "../../redux/actions/CourseAction";
import { useParams } from "react-router";

const animatedComponents = makeAnimated();

const Edit = () => {
  const NameRef = useRef();
  const DescRef = useRef();
  const PriceRef = useRef();
  const [selectedOptionss, setSelectedOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [courseUpdate, setCourseUpdate] = useState([]);
  const allCategory = useSelector((state) => state.CategoryReducer.allCategory);
  const allTags = useSelector((state) => state.TagReducer.allTag);
  const [courseTags, setCourseTags] = useState();
  const courseDetails = useSelector(
    (state) => state.CourseReducer.courseDetails
  );
  console.log(courseDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  // if (courseDetails.courseTags.length>1) {
  //  console.log(courseDetails.courseTags.length)
  // }
  useEffect(() => {
    dispatch(setAllTags());
    dispatch(setAllCategory());
    dispatch(setCourseDetails(id));
    // setCourseUpdate(courseDetails);
    if (courseDetails.courseTags && courseDetails.courseTags.length > 1) {
      var defaultOptions = courseDetails.courseTags.map((item) => {
        return { value: item.tagId, label: item.name };
      });
      setCourseTags([...defaultOptions])
    
    }
  }, []); 
  if(courseTags){
     console.log(courseTags);
  }
  
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
    dispatch(createCourse(UpdateData));
    // console.log(CreateData);
  };

  const options = allTags.map((item) => {
    return { value: item.id, label: item.name };
  });

  const handleChange = (selectedOptions) => {
    let catArray = [];
    selectedOptions.map((o) => catArray.push(o.value));
    setSelectedOptions([...catArray]);
  };
  const singleSelect = (e) => {
    setSelectedCategory(e.target.value);
  };
  const onInputChange = () => {};
  // console.log(selectedCategory);
  return (
    <div className="col-lg-8">
      <form onSubmit={UpdateForm}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={onInputChange}
            value={courseDetails.name || ""}
            ref={NameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">DescRef</label>
          <input
            type="input"
            className="form-control"
            onChange={onInputChange}
            value={courseDetails.desc || ""}
            ref={DescRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">price</label>
          <input type="input" className="form-control" ref={PriceRef} />
        </div>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={courseTags}
          isMulti
          options={options}
          onChange={handleChange}
        />
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
