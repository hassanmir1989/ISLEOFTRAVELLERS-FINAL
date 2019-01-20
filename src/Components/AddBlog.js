import React from "react";
import Header from "../Components/Header";
import BlogForm from "../Components/BlogForm";
import { connect } from "react-redux";
import { addAdminBlog } from "../actions/blogActions";
class UpdateBlog extends React.Component {
  render() {
    console.log(this.props.adminBlog);
    return (
      <div>
        <Header />
        <BlogForm
          onSubmitForm={data => {
            this.props.dispatch(addAdminBlog(data));
            this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}

export default connect()(UpdateBlog);
