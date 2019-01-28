import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { startAddReview } from "../src/actions/visitorReview";
import {
  startAddBlogs,
  editAdminBlog,
  startAddPublicBlogs
} from "../src/actions/blogActions";
import moment from "moment";
import { auth } from "./firebase/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import LoadingSpinner from "../src/Components/LoadingPage";
import { login, logout } from "../src/actions/auth";
import { history } from "../src/AppRouter/AppRouter";
import { Redirect } from "react-router-dom";
const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const render = () => {
  if (!hasRendered) {
    store.dispatch(startAddBlogs());
    ReactDOM.render(<ReduxApp />, rootElement);
    hasRendered = true;
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<LoadingSpinner />, rootElement);

auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startAddReview());
    render();
    if (history.location.pathname === "/logIn") {
      history.push("/");
    }
  } else {
    render();
    store.dispatch(logout());
  }
});
