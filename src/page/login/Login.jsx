import axios from "axios";
import React, { useRef, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Login = () => {
  const UserNameRef = useRef();
  const PasswordRef = useRef();

  const LoginForm = (e) => {
    e.preventDefault();
    const loginData = {
      username: UserNameRef.current.value,
      password: PasswordRef.current.value,
    };
    axios
      .post("https://localhost:44305/api/manage/accounts/login", loginData)
      .then((res) => console.log(res));
  };
  let jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijg1M2JjNDVhLTIwOTctNGE1YS05OTJiLTNmYmE2MWIyY2Y5NSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsIkZ1bGxOYW1lIjoiWmFocmEgU2hhcmlmb3ZhIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MzY5MDgyMzQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzA1LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzA1LyJ9.7K7byjl948hL_Ve784cMITHo_6mxC3IATs0zOOPdyrU";

  var decoded = jwt_decode(jwt);
  console.log( decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
  return (
    <>
      <div className="col-lg-8">
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
