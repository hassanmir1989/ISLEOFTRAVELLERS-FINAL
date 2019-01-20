import { createStore, combineReducers } from "redux";
import visitorReviewsReducer from "../reducer/visitorReviewReducer";
import adminBlogReducer from "../reducer/adminBlogReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({ visitorReviewsReducer, adminBlogReducer })
  );
  return store;
};

export default configureStore;
