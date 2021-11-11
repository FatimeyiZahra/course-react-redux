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
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/select">
            <SelectOption />
          </Route>
          <Route excart path="/courseList">
            <CourseList/>
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
            <CategoryList/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
