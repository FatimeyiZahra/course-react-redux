import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./app/layout/Layout";
import CourseList from "./manage/course/CourseList";
import Edit from "./manage/course/Edit";
import Details from "./manage/course/Details";
import Create from "./manage/course/Create";
import CategoryList from "./manage/category/CategoryList";
import Login from "./page/login/Login";
import SelectOption from "./app/component/SelectOption";
import Register from "./page/register/Register";
import Error from "./page/404/Error";
import { useSelector } from "react-redux";
const App = () => {
  const isLoggedIn = useSelector((state) => state.authreducer.isLoggedIn);
  // console.log(isLoggedIn);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {!isLoggedIn ? (
            <>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/register">
            <Register />
          </Route>
            </>
          ) : (
            <>
              <Route excart path="/courseList">
                <CourseList />
              </Route>
              <Route path="/edit/course/:id">
                <Edit />
              </Route>
              <Route path="/details/course/:id">
                <Details />
              </Route>
              <Route path="/create/course">
                <Create />
              </Route>
              <Route path="/categoryList">
                <CategoryList />
              </Route>
              <Route exact path="/login">
                <Error />
              </Route>
            </>
          )}
          <Route exact path="/select">
            <SelectOption />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
