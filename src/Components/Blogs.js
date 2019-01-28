import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
  Button,
  ButtonGroup,
  ButtonDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import { startRemoveAdminBlog } from "../actions/blogActions";
class Blogs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container mt-3 p-2">
          <div className="row">
            {this.props.isAuthenticated &&
              this.props.adminBlogs.map(singleBlog => (
                <div
                  key={singleBlog.blogID}
                  className="col-10  col-sm-10  col-md-5 col-lg-3 text-center mb-2 border rounded mx-auto shadow-lg mb-5 bg-white p-0"
                >
                  <div className="blog-image my-4 p-0 ">
                    <img
                      src={singleBlog.blogImageURL}
                      alt=""
                      className="img-fluid my-auto"
                    />
                  </div>

                  <div className="card-body ">
                    <h5
                      style={{ wordBreak: "break-all" }}
                      className="card-title"
                    >
                      {singleBlog.blogName}
                    </h5>
                    <p className="card-text" style={{ wordBreak: "break-all" }}>
                      {`${singleBlog.blogDescription.substr(0, 80)}... `}
                      <Button className="p-0" color="link">
                        Click for more
                      </Button>
                    </p>

                    <ButtonGroup>
                      <Button
                        onClick={() => {
                          this.props.history.push(
                            `editBlog/${singleBlog.blogID}`
                          );
                        }}
                        color="warning"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          this.props.dispatch(
                            startRemoveAdminBlog(
                              singleBlog.blogID,
                              singleBlog.blogImageFileName
                            )
                          );
                        }}
                        color="danger"
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              ))}
            {this.props.adminBlogs.map(singleBlog => {
              if (singleBlog.blogIsPublic && !this.props.isAuthenticated) {
                return (
                  <div
                    key={singleBlog.blogID}
                    className="col-10  col-sm-10  col-md-5 col-lg-3 text-center mb-2 border rounded mx-auto shadow-lg mb-5 bg-white p-0"
                  >
                    <div className="blog-image my-4 p-0 ">
                      <img
                        src={singleBlog.blogImageURL}
                        alt=""
                        className="img-fluid my-auto"
                      />
                    </div>

                    <div className="card-body ">
                      <h5
                        style={{ wordBreak: "break-all" }}
                        className="card-title"
                      >
                        {singleBlog.blogName}
                      </h5>
                      <p
                        className="card-text"
                        style={{ wordBreak: "break-all" }}
                      >
                        {`${singleBlog.blogDescription.substr(0, 80)}... `}
                        <Button className="p-0" color="link">
                          Click for more
                        </Button>
                      </p>

                      <ButtonGroup>
                        <Button
                          onClick={() => {
                            this.props.history.push(
                              `editBlog/${singleBlog.blogID}`
                            );
                          }}
                          color="warning"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => {
                            this.props.dispatch(
                              startRemoveAdminBlog(
                                singleBlog.blogID,
                                singleBlog.blogImageFileName
                              )
                            );
                          }}
                          color="danger"
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adminBlogs: state.adminBlogReducer,
  isAuthenticated: !!state.authReducer.uid
});

export default connect(mapStateToProps)(Blogs);
