import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import MainPage from "../Components/MainPage";
import Blogs from "../Components/Blogs";
import ContactUs from "../Components/ContactUs";
import LogIn from "../Components/LogIn";
import PageNotFound from "../Components/PageNotFound";
import AddBlog from "../Components/AddBlog";
import EditBlog from "../Components/EditBlog";
import createHistory from "history/createBrowserHistory";
import VisitorReviews from "../Components/VisitorReviews";
import SignUp from "../Components/SignUp";
import PrivateRoute from "./PrivateRoutes";
import MainPageImages from "../Components/MainPageImages";
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/blogs" component={Blogs} />
      <PrivateRoute path="/addBlog" component={AddBlog} />
      <PrivateRoute path="/editBlog/:id" component={EditBlog} />
      <PrivateRoute path="/signUp" component={SignUp} />
      <PrivateRoute path="/mainPageImages" component={MainPageImages} />
      <Route path="/logIn" component={LogIn} />
      <PrivateRoute path="/visitorReviews" component={VisitorReviews} />
      <Route path="/contactUs" component={ContactUs} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
