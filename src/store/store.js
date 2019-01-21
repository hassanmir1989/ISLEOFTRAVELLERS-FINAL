import { createStore, combineReducers, applyMiddleware } from "redux";
import visitorReviewsReducer from "../reducer/visitorReviewReducer";
import adminBlogReducer from "../reducer/adminBlogReducer";
import thunk from "redux-thunk";
const configureStore = () => {
  const store = createStore(
    combineReducers({ visitorReviewsReducer, adminBlogReducer }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
