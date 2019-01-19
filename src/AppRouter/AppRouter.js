import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "../Components/MainPage";
import Blog from "../Components/Blog";
import ContactUs from "../Components/ContactUs";
import Admin from "../Components/Admin";
import PageNotFound from "../Components/PageNotFound";
import UpdateBlog from "../Components/UpdateBlog";
import VisitorReviews from "../Components/VisitorReviews";
const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/blog" component={Blog} />
      <Route path="/addBlog" component={UpdateBlog} />
      <Route path="/editBlog/:id" component={UpdateBlog} />
      <Route path="/admin" component={Admin} />
      <Route path="/visitorReviews" component={VisitorReviews} />
      <Route path="/contactUs" component={ContactUs} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
