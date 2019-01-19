import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import { connect } from "react-redux";
import { removeVisitorReview } from "../actions/visitorReview";
class VisitorReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="info" className="m-0 p-1" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 600 }}
          backdropTransition={{ timeout: 1000 }}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Detailed message from {this.props.visitorName}
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-sm-4 col-md-4">From:</div>
              <div className="col-sm-6 col-md-6">
                {this.props.visitorName} - {this.props.visitorReviewID}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 col-md-4">On:</div>
              <div className="col-sm-6 col-md-6">
                {moment(this.props.visitorReviewTime).format("DD MMM YY hh:mm")}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-4">Email:</div>
              <div className="col-sm-6 col-md-6">{this.props.visitorEmail}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <strong>Comment:</strong>
                <p className="mt-3">{this.props.visitorReview}</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="mx-auto my-auto">
              <Button
                onClick={() => {
                  this.props.dispatch(
                    removeVisitorReview(this.props.visitorReviewID)
                  );
                }}
                color="danger"
                className="m-2"
              >
                Delete
              </Button>
              <Button className="m-2" color="warning" onClick={this.toggle}>
                Cancel
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect()(VisitorReviewModal);
