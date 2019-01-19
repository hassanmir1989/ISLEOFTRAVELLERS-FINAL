import { createStore, combineReducers } from "redux";
import visitorReviewsReducer from "../reducer/visitorReviewReducer";

const configureStore = () => {
  const store = createStore(combineReducers({ visitorReviewsReducer }));
  return store;
};

export default configureStore;
