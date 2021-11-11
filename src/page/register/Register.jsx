import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const FullNameRef = useRef();
  const UserNameRef = useRef();
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const [error, setError] = useState(false);
  const history = useHistory();
  const [data, setData] = useState(true)

//    const statusError=()=>{
//        if(data.status.204){

//        }
//     }


  const RegisterForm = (e) => {
    e.preventDefault();
    if(FullNameRef.current.value===""){
        setError(true)
    }
    const registerData = {
      FullName: FullNameRef.current.value,
      username: UserNameRef.current.value,
      email: EmailRef.current.value,
      password: PasswordRef.current.value,
    };
    axios.post(
      "https://localhost:44305/api/manage/accounts/register",
      registerData
    )
    .then(res=>console.log(res));

    // history.push(`/login`);
  };
  return (
    <>
      <div className="col-lg-8">
        <form onSubmit={RegisterForm}>
          <div class="form-group">
            <label for="exampleInputEmail1">full Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter full name"
              ref={FullNameRef}
            />

            <small>{error ? "bu sehvdir" : ""}</small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">user Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
              ref={UserNameRef}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              ref={EmailRef}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              ref={PasswordRef}
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;