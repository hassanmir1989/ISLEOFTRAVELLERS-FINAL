import React from "react";
import Header from "../Components/Header";
import { storage } from "../firebase/firebase";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import FileUploader from "react-firebase-file-uploader";
import { connect } from "react-redux";
import moment from "moment";
class MainPageImages extends React.Component {
  constructor(props) {
    super(props);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
    this.state = {
      blogName: props.blogName ? props.blogName : "",
      blogDescription: props.blogDescription ? props.blogDescription : "",
      blogImageFileName: props.blogImageFileName ? props.blogImageFileName : "",
      blogImageURL: props.blogImageURL ? props.blogImageURL : "",
      blogLocation: props.blogLocation ? props.blogLocation : "",
      blogUploadTime: props.blogUploadTime
        ? moment(props.blogUploadTime)
        : moment(),
      blogUploadProcess: 0,
      blogIsPublic: props.blogIsPublic ? props.blogIsPublic : false,
      focused: false,
      error: ""
    };
  }
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  handleUploadError(error) {
    console.error(error);
  }

  render() {
    return (
      <div>
        <Header />

        <FileUploader
          accept="image/*"
          name="avatar"
          randomizeFilename
          storageRef={storage.ref(`images/${this.props.uid}`)}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.authReducer.uid
});
export default connect(mapStateToProps)(MainPageImages);
