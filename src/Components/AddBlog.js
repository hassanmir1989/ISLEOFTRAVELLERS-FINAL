import React from "react";
import Header from "../Components/Header";
import BlogForm from "../Components/BlogForm";
import { connect } from "react-redux";
import { startAddAdminBlog } from "../actions/blogActions";

class AddBlog extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BlogForm
          onSubmitForm={data => {
            this.props.dispatch(startAddAdminBlog(data));

            this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}

export default connect()(AddBlog);
