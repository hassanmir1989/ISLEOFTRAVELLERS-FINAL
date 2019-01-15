import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import MainPage from "./Components/MainPage";
import Blog from "./Components/Blog";
import ContactUs from "./Components/ContactUs";
import Admin from "./Components/Admin";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/blog" component={Blog} />
      <Route path="/admin" component={Admin} />
      <Route path="/contactUs" component={ContactUs} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppRouter />, rootElement);
