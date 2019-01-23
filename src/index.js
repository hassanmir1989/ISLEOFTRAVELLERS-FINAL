import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { addVisitorReview } from "../src/actions/visitorReview";
import {
  startAddBlogs,
  editAdminBlog,
  addAdminBlog
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
const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<LoadingSpinner />, rootElement);

auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    console.log(user.uid);
  } else {
    store.dispatch(logout());
    history.push("/");
    console.log("signed out");
  }
});

store.dispatch(startAddBlogs()).then(() => {
  ReactDOM.render(<ReduxApp />, rootElement);
});
