import React from "react";
import Header from "../Components/Header";
import BlogForm from "../Components/BlogForm";
import { connect } from "react-redux";
class EditBlog extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BlogForm {...this.props.editBlog} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  editBlog: state.adminBlogReducer.find(singleBlog => {
    return singleBlog.blogID === props.match.params.id;
  })
});

export default connect(mapStateToProps)(EditBlog);
