import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Button, ButtonGroup } from "reactstrap";
import { startRemoveAdminBlog } from "../actions/blogActions";
class Blogs extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container mt-3">
          {!this.props.isAuthenticated &&
            this.props.adminBlogs.map(singleBlog => {
              if (singleBlog.blogIsPublic) {
                return (
                  <div key={singleBlog.blogID}>
                    <div className="row text-center shadow">
                      <div className="mx-auto col-8 col-xs-4 col-sm-6 col-md-6 col-lg-3 p-2 my-auto">
                        <img
                          className="img-fluid  img-thumbnail"
                          src={singleBlog.blogImageURL}
                          alt=""
                        />
                      </div>
                      <div
                        style={{ wordBreak: "break-all" }}
                        className="col-8  col-xs-10 col-sm-6 col-md-6 col-lg-3 p-2 mx-auto my-auto"
                      >
                        <h3 className="d-inline">{singleBlog.blogName}</h3>
                        <br />
                        <h5 className="d-inline">{singleBlog.blogLocation}</h5>
                        <h6>
                          {singleBlog.blogDescription.substring(0, 100)}...
                        </h6>
                        <Button color="link">Click For More</Button>
                        <div>
                          <ButtonGroup hidden={!this.props.isAuthenticated}>
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
                    </div>
                    <hr className="m-3" />
                  </div>
                );
              }
            })}

          {this.props.isAuthenticated &&
            this.props.adminBlogs.map(singleBlog => {
              return (
                <div key={singleBlog.blogID}>
                  <div className="row text-center shadow">
                    <div className="mx-auto col-8 col-xs-4 col-sm-6 col-md-6 col-lg-3 p-2 my-auto">
                      <img
                        className="img-fluid  img-thumbnail"
                        src={singleBlog.blogImageURL}
                        alt=""
                      />
                    </div>
                    <div
                      style={{ wordBreak: "break-all" }}
                      className="col-8  col-xs-10 col-sm-6 col-md-6 col-lg-3 p-2 mx-auto my-auto"
                    >
                      <h3 className="d-inline">{singleBlog.blogName}</h3>
                      <br />
                      <h5 className="d-inline">{singleBlog.blogLocation}</h5>
                      <h6>{singleBlog.blogDescription.substring(0, 100)}...</h6>
                      <Button color="link">Click For More</Button>
                      <div>
                        <ButtonGroup hidden={!this.props.isAuthenticated}>
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
                  </div>
                  <hr className="m-3" />
                </div>
              );
            })}
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
