import React from "react";
import Header from "./Header";
import {
  Button,
  Form,
  Media,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";
import { startAddVisitorReview } from "../actions/visitorReview";
import { connect } from "react-redux";
import moment from "moment";
class ContactUs extends React.Component {
  constructor() {
    super();
    this.onSubmitReview = this.onSubmitReview.bind(this);
    this.onChangeVisitorReview = this.onChangeVisitorReview.bind(this);
    this.onChangeVisitorContact = this.onChangeVisitorContact.bind(this);
    this.onChangeVisitorEmail = this.onChangeVisitorEmail.bind(this);
    this.onChangeVisitorName = this.onChangeVisitorName.bind(this);

    this.state = {
      visitorName: "",
      visitorContact: "",
      visitorReview: "",
      visitorEmail: "",
      visitorReviewTime: moment().valueOf(),
      error: ""
    };
  }

  onSubmitReview(e) {
    e.preventDefault();
    if (
      this.state.visitorName &&
      this.state.visitorEmail &&
      this.state.visitorReview
    ) {
      this.setState(() => ({
        error: ""
      }));
      this.props.addVisitorReview({ ...this.state });
      this.props.history.push("/");
    } else {
      this.setState(() => ({
        error: "Please Enter the required details with '*'",
        visitorReviewTime: moment().valueOf()
      }));
    }
  }

  onChangeVisitorName(e) {
    const visitorName = e.target.value;
    this.setState(() => ({
      visitorName
    }));
  }

  onChangeVisitorContact(e) {
    const visitorContact = e.target.value;
    this.setState(() => ({
      visitorContact
    }));
  }

  onChangeVisitorReview(e) {
    const visitorReview = e.target.value;
    this.setState(() => ({
      visitorReview
    }));
  }

  onChangeVisitorEmail(e) {
    const visitorEmail = e.target.value;
    this.setState(() => ({
      visitorEmail
    }));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="mt-4 container ">
          <div className="row">
            <div className="shadow mx-auto my-auto col-12 col-xs-8 col-sm-12 col-md-6">
              <Media
                className="img-fluid mx-auto"
                width="100%"
                src="https://assets.saatchiart.com/saatchi/394877/art/3559294/additional_e2adb04ac08e5e725cd16b310860a2a5cba0f05f-7.jpg"
              />
            </div>
            <div className="mt-2 my-auto mx-auto col-10 col-xs-6 col-sm-10 col-md-6">
              <Form onSubmit={this.onSubmitvisitorReview} className="mt-4">
                {this.state.error && (
                  <Alert color="danger">{this.state.error}</Alert>
                )}
                <FormGroup>
                  <Label>
                    Name <span className="mandatoryFields">*</span>
                  </Label>
                  <Input
                    name="visitorName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={this.state.visitorName}
                    onChange={this.onChangeVisitorName}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Contact Number</Label>
                  <Input
                    name="visitorContact"
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    value={this.state.visitorContact}
                    onChange={this.onChangeVisitorContact}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    Email <span className="mandatoryFields">*</span>
                  </Label>
                  <Input
                    name="visitorEmail"
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={this.state.visitorEmail}
                    onChange={this.onChangeVisitorEmail}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    Comments <span className="mandatoryFields">*</span>
                  </Label>
                  <Input
                    type="textarea"
                    name="visitorReview"
                    value={this.state.visitorReview}
                    onChange={this.onChangeVisitorReview}
                  />
                </FormGroup>
                <small>
                  We'll never share your email or contact number with anyone
                  else , This is just in case we need to get in touch with you.
                </small>
                <br />
                <Button
                  onClick={this.onSubmitReview}
                  className="my-4"
                  block
                  color="primary"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addVisitorReview: review => dispatch(startAddVisitorReview(review))
});
export default connect(
  undefined,
  mapDispatchToProps
)(ContactUs);
