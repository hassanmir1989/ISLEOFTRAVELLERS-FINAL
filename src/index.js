import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { addVisitorReview } from "../src/actions/visitorReview";
import { addAdminBlog, editAdminBlog } from "../src/actions/blogActions";
import moment from "moment";
import "./firebase/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(
  addAdminBlog({
    blogName: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    blogDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, soluta! Asperiores amet ad quos excepturi nam dignissimos laborum deserunt, libero velit repudiandae iure eaque, quibusdam ab repellat assumenda iste molestias?",
    blogImageFileName: "three",
    blogImageURL: "three",
    blogLocation: "Pakistan",
    blogUploadTime: moment(),
    blogUploadProcess: "three",
    blogIsPublic: true
  })
);
store.dispatch(
  addAdminBlog({
    blogName: "1111111111111111111111111111111111111111111111111111",
    blogDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, soluta! Asperiores amet ad quos excepturi nam dignissimos laborum deserunt, libero velit repudiandae iure eaque, quibusdam ab repellat assumenda iste molestias?",
    blogImageFileName: "One",
    blogImageURL: "One",
    blogLocation: "Kuwait",
    blogUploadTime: moment(),
    blogUploadProcess: "One",
    blogIsPublic: true
  })
);
const testEditData = store.dispatch(
  addAdminBlog({
    blogName: "two",
    blogDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, soluta! Asperiores amet ad quos excepturi nam dignissimos laborum deserunt, libero velit repudiandae iure eaque, quibusdam ab repellat assumenda iste molestias?",
    blogImageFileName: "two",
    blogImageURL: "two",
    blogLocation: "two",
    blogUploadTime: moment(),
    blogUploadProcess: "two",
    blogIsPublic: false
  })
);

const rootElement = document.getElementById("root");
ReactDOM.render(<ReduxApp />, rootElement);
