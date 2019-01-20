import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { addVisitorReview } from "../src/actions/visitorReview";
import { addAdminBlog } from "../src/actions/blogActions";
import moment from "moment";
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
    blogID: "three",
    blogName: "three",
    blogDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, soluta! Asperiores amet ad quos excepturi nam dignissimos laborum deserunt, libero velit repudiandae iure eaque, quibusdam ab repellat assumenda iste molestias?",
    blogImageFileName: "three",
    blogImageURL: "Kuwait",
    blogLocation: "three",
    blogUploadTime: moment().valueOf(),
    blogUploadProcess: "three",
    blogIsPublic: true
  })
);
store.dispatch(
  addAdminBlog({
    blogID: "One",
    blogName: "One",
    blogDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, soluta! Asperiores amet ad quos excepturi nam dignissimos laborum deserunt, libero velit repudiandae iure eaque, quibusdam ab repellat assumenda iste molestias?",
    blogImageFileName: "One",
    blogImageURL: "One",
    blogLocation: "One",
    blogUploadTime: moment().valueOf(),
    blogUploadProcess: "One",
    blogIsPublic: true
  })
);
store.dispatch(
  addAdminBlog({
    blogID: "TWO",
    blogName: "two",
    blogDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, soluta! Asperiores amet ad quos excepturi nam dignissimos laborum deserunt, libero velit repudiandae iure eaque, quibusdam ab repellat assumenda iste molestias?",
    blogImageFileName: "two",
    blogImageURL: "two",
    blogLocation: "two",
    blogUploadTime: moment().valueOf(),
    blogUploadProcess: "two",
    blogIsPublic: true
  })
);
const rootElement = document.getElementById("root");
ReactDOM.render(<ReduxApp />, rootElement);
