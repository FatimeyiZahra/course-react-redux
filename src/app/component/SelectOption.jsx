import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { setAllTags } from "../../redux/actions/TagAction";
const animatedComponents = makeAnimated();



const SelectOption = () => {

  const allTags = useSelector(
    (state) => state.TagReducer.allTag
  );
  // console.log(allTags); 
//   const options = [
//   { value: "1", label: "Chocolate" },
//   { value: "2", label: "Strawberry" },
//   { value: "3", label: "Vanilla" },
// ];
// if(allTags&& allTags.map(item=>{

// }));

const options = allTags.map(item=> {
  return { value: item.id, label: item.name };
})

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllTags());
  }, []);
  const [selectedOptionss, setSelectedOptions] = useState([]);
  console.log(selectedOptionss)
  // const handleChange = (options) => {
  //   setSelectedOptions(options);
  //   console.log(options)
  // };
  const  handleChange = (selectedOptions) => {
    let catArray = [];
    selectedOptions.map(o => 
       catArray.push(o.value)
   );
   setSelectedOptions([...catArray]);

  //  setSelectedOptions({selectedOptionss:catArray});
   
}
  return (
    <div className="col-lg-5">
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[options[1], options[0]]}
        isMulti
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectOption;
