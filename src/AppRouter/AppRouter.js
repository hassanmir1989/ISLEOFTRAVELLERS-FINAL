import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import MainPage from "../Components/MainPage";
import Blogs from "../Components/Blogs";
import ContactUs from "../Components/ContactUs";
import SignIn from "../Components/SignIn";
import PageNotFound from "../Components/PageNotFound";
import AddBlog from "../Components/AddBlog";
import EditBlog from "../Components/EditBlog";
import createHistory from "history/createBrowserHistory";
import VisitorReviews from "../Components/VisitorReviews";

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/addBlog" component={AddBlog} />
      <Route path="/editBlog/:id" component={EditBlog} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/visitorReviews" component={VisitorReviews} />
      <Route path="/contactUs" component={ContactUs} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
