const adminBlogReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    default:
      return state;
  }
};

export default adminBlogReducer;
