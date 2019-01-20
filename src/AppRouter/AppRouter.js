import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "../Components/MainPage";
import Blogs from "../Components/Blogs";
import ContactUs from "../Components/ContactUs";
import Admin from "../Components/Admin";
import PageNotFound from "../Components/PageNotFound";
import AddBlog from "../Components/AddBlog";
import EditBlog from "../Components/EditBlog";

import VisitorReviews from "../Components/VisitorReviews";
const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/addBlog" component={AddBlog} />
      <Route path="/editBlog/:id" component={EditBlog} />
      <Route path="/admin" component={Admin} />
      <Route path="/visitorReviews" component={VisitorReviews} />
      <Route path="/contactUs" component={ContactUs} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
