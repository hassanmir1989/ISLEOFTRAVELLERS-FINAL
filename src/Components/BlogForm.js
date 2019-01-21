import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Alert,
  Label,
  Input,
  FormText
} from "reactstrap";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import { CountryDropdown } from "react-country-region-selector";
import FileUploader from "react-firebase-file-uploader";
import { storage } from "../firebase/firebase";
class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeBlogName = this.onChangeBlogName.bind(this);
    this.onChangeBlogDescription = this.onChangeBlogDescription.bind(this);
    this.onChangeBlogImageFileName = this.onChangeBlogImageFileName.bind(this);
    this.onChangeBlogImageURL = this.onChangeBlogImageURL.bind(this);
    this.onChangeBlogLocation = this.onChangeBlogLocation.bind(this);
    this.onChangeBlogUploadTime = this.onChangeBlogUploadTime.bind(this);
    this.onChangeBlogUploadProcess = this.onChangeBlogUploadProcess.bind(this);
    this.onChangeBlogType = this.onChangeBlogType.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.state = {
      blogName: props.blogName ? props.blogName : "",
      blogDescription: props.blogDescription ? props.blogDescription : "",
      blogImageFileName: props.blogImageFileName ? props.blogImageFileName : "",
      blogImageURL: props.blogImageURL ? props.blogImageURL : "",
      blogLocation: props.blogLocation ? props.blogLocation : "",
      blogUploadTime: props.blogUploadTime ? props.blogUploadTime : moment(),
      blogUploadProcess: 0,
      blogIsPublic: props.blogIsPublic ? props.blogIsPublic : false,
      focused: false,
      error: ""
    };
  }

  onChangeBlogName(e) {
    e.persist();
    const blogName = e.target.value;
    this.setState(() => ({
      blogName
    }));
  }
  onChangeBlogDescription(e) {
    e.persist();
    const blogDescription = e.target.value;
    this.setState(() => ({
      blogDescription
    }));
  }
  onChangeBlogImageFileName(e) {
    e.persist();
    const blogImageFileName = e.target.value;
    this.setState(() => ({
      blogImageFileName
    }));
  }
  onChangeBlogImageURL(e) {
    e.persist();
    const blogImageURL = e.target.value;
    this.setState(() => ({
      blogImageURL
    }));
  }
  onChangeBlogLocation(blogLocation) {
    this.setState(() => ({
      blogLocation
    }));
  }
  onChangeBlogUploadTime(e) {
    e.persist();
    const blogUploadTime = e.target.value;
    this.setState(() => ({
      blogUploadTime
    }));
  }
  onChangeBlogUploadProcess(e) {
    e.persist();
    const blogUploadProcess = e.target.value;
    this.setState(() => ({
      blogUploadProcess
    }));
  }

  onChangeBlogType(e) {
    e.persist();
    const blogTypeValue = e.target.value.toLowerCase();
    if (blogTypeValue === "public") {
      this.setState(() => ({
        blogIsPublic: true
      }));
    } else {
      this.setState(() => ({
        blogIsPublic: false
      }));
    }
  }

  onSubmitForm(e) {
    e.preventDefault();
    if (
      this.state.blogName &&
      this.state.blogLocation &&
      this.state.blogDescription
    ) {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmitForm({ ...this.state });
    } else {
      this.setState(() => ({
        error: "Please enter all details to upload blog"
      }));
    }
  }

  render() {
    return (
      <div>
        <div className="container my-5">
          <Form>
            {this.state.error && (
              <Alert color="danger">{this.state.error}</Alert>
            )}

            <div className="row">
              <div className="col-12 col-xs-12 col-sm-12 col-md-5 col-lg-6">
                <FormGroup>
                  <Label>Blog Name</Label>

                  <Input
                    type="text"
                    name="blogName"
                    onChange={this.onChangeBlogName}
                    placeholder="Blog Name"
                    value={this.state.blogName}
                  />
                </FormGroup>
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-7 col-lg-6">
                <FormGroup>
                  <Label>Blog Location</Label>
                  <CountryDropdown
                    className="form-control"
                    value={this.state.blogLocation}
                    onChange={this.onChangeBlogLocation}
                  />
                </FormGroup>
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <FormGroup>
                  <Label>Blog Type</Label>
                  {this.state.blogIsPublic && (
                    <Input
                      type="select"
                      name="blogType"
                      onChange={this.onChangeBlogType}
                    >
                      <option>Public</option>
                      <option>Private</option>
                    </Input>
                  )}
                  {!this.state.blogIsPublic && (
                    <Input
                      type="select"
                      name="blogType"
                      onChange={this.onChangeBlogType}
                    >
                      <option>Private</option>
                      <option>Public</option>
                    </Input>
                  )}
                </FormGroup>
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <Label>Date</Label>
                <br />
                <SingleDatePicker
                  date={this.state.blogUploadTime} // momentPropTypes.momentObj or null
                  onDateChange={blogUploadTime =>
                    this.setState({ blogUploadTime })
                  } // PropTypes.func.isRequired
                  focused={this.state.focused} // PropTypes.bool
                  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                  numberOfMonths={1}
                  showClearDate
                  withFullScreenPortal
                  isOutsideRange={() => {
                    return false;
                  }}
                />
              </div>
            </div>

            <FormGroup>
              <Label for="exampleText">Blog Description</Label>
              <Input
                type="textarea"
                name="blogDescription"
                id="exampleText"
                onChange={this.onChangeBlogDescription}
                value={this.state.blogDescription}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleFile">File</Label>
              <FileUploader
                id="exampleFile"
                accept="image/*"
                name="avatar"
                randomizeFilename
                storageRef={storage.ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
              <FormText color="muted">
                Please make sure the size of the image being uploaded does not
                exceed 1MB.
              </FormText>
            </FormGroup>
            <Button onClick={this.onSubmitForm}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default BlogForm;
