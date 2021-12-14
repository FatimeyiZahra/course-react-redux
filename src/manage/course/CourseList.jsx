import React, { useEffect,} from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, setAllCourse } from "../../redux/actions/CourseAction";

const CourseList = () => {
  const allCourse = useSelector((state) => state.CourseReducer.allCourse.data);
  // console.log(allCourse)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllCourse());
    // axios.delete(`https://localhost:44313/V1/News/news/${id}`)
    // async function deletePost() {
    //   await axios.delete(`https://localhost:44313/V1/News/news/${id}`);
    // }

    // deletePost();
  }, []);

  const HandleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCourse(id));
        window.location.reload();
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <>
      {" "}
      <Link to="/create/course">
        <button type="button" className="btn btn-success">
          create
        </button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {allCourse &&
            allCourse.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category.name}</td>

                <td>
                  <Link to={`/edit/course/${item.id}`}>
                    <button type="button" className="btn btn-warning">
                      edit
                    </button>
                  </Link>
                  <Link to={`/details/course/${item.id}`}>
                    <button type="button" className="btn btn-info">
                      details
                    </button>
                  </Link>

                  <button
                    onClick={() => HandleDelete(item.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CourseList;
