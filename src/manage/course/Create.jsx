import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllTags } from "../../redux/actions/TagAction";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { createCourse } from "../../redux/actions/CourseAction";
import { setAllCategory } from "../../redux/actions/CategoryAction";

const animatedComponents = makeAnimated();

const Create = () => {
  const NameRef = useRef();
  const DescRef = useRef();
  const PriceRef = useRef();
  const [selectedOptionss, setSelectedOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState()

  const CreateForm = (e) => {
    e.preventDefault();
    const CreateData = {
      Name: NameRef.current.value,
      Desc: DescRef.current.value,
        Price: parseFloat(PriceRef.current.value) ,
      TagIds: selectedOptionss,
      CategoryId:parseInt(selectedCategory),
      StartDate:"2022-01-01T00:00:00"
    };
    dispatch(createCourse(CreateData));
    // console.log(CreateData);
  };
  const allCategory = useSelector((state) => state.CategoryReducer.allCategory);
  const allTags = useSelector((state) => state.TagReducer.allTag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllTags());
    dispatch(setAllCategory());
  }, []);

  const options = allTags.map((item) => {
    return { value: item.id, label: item.name };
  });

  // console.log(selectedOptionss);
  const handleChange = (selectedOptions) => {
    let catArray = [];
    selectedOptions.map((o) => catArray.push(o.value));
    setSelectedOptions([...catArray]);
  };
  const sort = (e) => {
    setSelectedCategory(e.target.value)
 
  };
    // console.log(selectedCategory);
  return (
    <div className="col-lg-8">
      <form onSubmit={CreateForm}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            ref={NameRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">DescRef</label>
          <input
            type="input"
            className="form-control"
            placeholder="desc"
            ref={DescRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">price</label>
          <input
            type="input"
            className="form-control"
            placeholder="desc"
            ref={PriceRef}
          />
        </div>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[options[1], options[0]]}
          isMulti
          options={options}
          onChange={handleChange}
        />
        <select   onChange={(e)=>sort(e)} className="form-select">
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

export default Create;
