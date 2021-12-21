import React from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { LogoutAction } from "../../../redux/actions/AuthAction";
import { useHistory } from "react-router-dom";
const Header = () => {
  const token = useSelector(state => state.authreducer.token)
  console.log(token)

  if(token.length === 0){
    console.log("olmayib")
  }else{
    var decoded = jwt_decode(token);
    var username = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
   console.log(username)
  } 
  const dispatch = useDispatch()
  const history = useHistory();
  const LogOut = () => {
   dispatch(LogoutAction(history.push))
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#!">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#!navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#!">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              {username?
              (<>
              <a className="nav-link" href="#!">
              {username}
            </a> 
            <button onClick={LogOut}>
              logout
            </button> 
              </>):
            (<button>
            login
          </button>)
            }
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
