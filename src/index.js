import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { addVisitorReview } from "../src/actions/visitorReview";
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
  addVisitorReview({
    visitorReviewID: "ONE",
    visitorReview: "Not given",
    visitorContact: "Not given",
    visitorEmail: "Not given",
    visitorName: "Not given",
    visitorReviewTime: moment().valueOf()
  })
);
store.dispatch(
  addVisitorReview({
    visitorReviewID: "TWO",
    visitorReview: "Not given",
    visitorContact: "Not given",
    visitorEmail: "Not given",
    visitorName: "Not given",
    visitorReviewTime: moment().valueOf()
  })
);
store.dispatch(
  addVisitorReview({
    visitorReviewID: "THREE",
    visitorReview: "Not given",
    visitorContact: "Not given",
    visitorEmail: "Not given",
    visitorName: "Not given",
    visitorReviewTime: moment().valueOf()
  })
);
const rootElement = document.getElementById("root");
ReactDOM.render(<ReduxApp />, rootElement);
