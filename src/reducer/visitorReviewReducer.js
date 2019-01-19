const visitorReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.review];
    case "REMOVE_REVIEW":
      return state.filter(review => {
        return review.visitorReviewID !== action.id;
      });
    default:
      return state;
  }
};

export default visitorReviewsReducer;
