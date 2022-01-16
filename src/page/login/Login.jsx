import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import alertify from "alertifyjs";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/actions/AuthAction";

const Login = () => {
  //admin
  //admin123
  const UserNameRef = useRef();
  const PasswordRef = useRef();
  const [error, setError] = useState();
  // console.log(error);
  const history = useHistory();
  const dispatch = useDispatch();
  const [token, setJwt] = useState();
  const statusCode = useSelector((state) => state.AuthErrorReducer.statusCode);
  // console.log(statusCode)
  useEffect(() => {
    if (statusCode) {
      switch (statusCode) {
        case 400:
          setError("mail or passso");
          console.log("cant");
          break;
        case 201:
          setError("mail or passso");
          console.log("succes");
          break;
        case 404:
          setError("user not found");
          break;
        case 401:
          setError("mail or password is incorrect");
          break;
        default:
          return setError("asdad");
        // return setError(true);
      }
    }
  }, [statusCode]);
  const LoginForm = (e) => {
    e.preventDefault();
    const loginData = {
      username: UserNameRef.current.value,
      password: PasswordRef.current.value,
    };
    dispatch(authAction(loginData, history.push));
  };
  // console.log(token);
  if (token) {
    var decoded = jwt_decode(token);
    // console.log(
    //   decoded
    // );
    var role = decoded.Role;
    // if (role === "Admin") return <Redirect to="/courseList" />;
    // {
    //   // history.push(`/courseList`);
    //   console.log("user is admin")
    // }
    if (role === "Admin") {
      console.log("user is admin");
    } else {
      console.log("user is member");
      // history.push(`/categoryList`);
    }
  }
  //  const getHomeRouteForLoggedInUser = () => {
  //   if (role === 'admin') return '/courseList'
  //   if (role === 'client') return { name: 'access-control' }
  //   return { name: 'auth-login' }
  // }

  return (
    <>
      <div className="col-lg-8">
        <h2 className="text-danger">{error ? error : ""}</h2>
        <form onSubmit={LoginForm}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              ref={UserNameRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              ref={PasswordRef}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
