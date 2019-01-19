const addVisitorReview = ({
  visitorReviewID = "",
  visitorReview = "Not given",
  visitorContact = "Not given",
  visitorEmail = "Not given",
  visitorName = "Not given",
  visitorReviewTime = "Not given"
} = {}) => ({
  type: "ADD_REVIEW",
  review: {
    visitorReviewID,
    visitorReview,
    visitorContact,
    visitorEmail,
    visitorName,
    visitorReviewTime
  }
});

const removeVisitorReview = id => ({
  type: "REMOVE_REVIEW",
  id
});

export { addVisitorReview, removeVisitorReview };
