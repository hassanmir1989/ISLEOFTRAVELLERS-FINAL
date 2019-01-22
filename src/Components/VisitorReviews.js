import React from "react";
import Header from "../Components/Header";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import moment from "moment";
import VisitorReviewModal from "../Components/VisitorReviewsModal";
const VisitorReviews = ({ visitorReviews, ...rest }) => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-12 col-xs-8">
          <Table dark size="sm" responsive className="mt-4 text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Visitor Name</th>
                <th>Review Time</th>
                <th>More info</th>
              </tr>
            </thead>
            {visitorReviews.map((review, index) => (
              <tbody key={review.visitorReviewID} className="text-center">
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{review.visitorName}</td>
                  <td>
                    {moment(review.visitorReviewTime).format("DD MMM YY")}
                  </td>
                  <td>
                    <VisitorReviewModal {...review} buttonLabel="View More" />
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  visitorReviews: state.visitorReviewsReducer
});

export default connect(mapStateToProps)(VisitorReviews);
