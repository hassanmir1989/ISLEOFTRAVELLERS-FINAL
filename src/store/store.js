import { createStore, combineReducers, applyMiddleware } from "redux";
import visitorReviewsReducer from "../reducer/visitorReviewReducer";
import adminBlogReducer from "../reducer/adminBlogReducer";
import authReducer from "../reducer/authReducer";
import thunk from "redux-thunk";
const configureStore = () => {
  const store = createStore(
    combineReducers({ visitorReviewsReducer, adminBlogReducer, authReducer }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
