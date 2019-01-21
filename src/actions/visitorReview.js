import database from "../firebase/firebase";

const addVisitorReview = ({
  visitorReviewID,
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

const startAddVisitorReview = (reviewData = {}) => {
  return dispatch => {
    database
      .ref("visitorReviews")
      .push({
        ...reviewData
      })
      .then(ref => {
        dispatch(
          addVisitorReview({
            ...reviewData,
            visitorReviewID: ref.key
          })
        );
      });
  };
};

const removeVisitorReview = id => ({
  type: "REMOVE_REVIEW",
  id
});

const startRemoveVisitorReview = id => {
  return dispatch => {
    database
      .ref(`visitorReviews/${id}`)
      .remove()
      .then(() => {
        dispatch(removeVisitorReview(id));
      });
  };
};

export {
  addVisitorReview,
  removeVisitorReview,
  startAddVisitorReview,
  startRemoveVisitorReview
};
