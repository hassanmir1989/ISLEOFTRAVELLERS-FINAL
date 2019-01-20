import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Media, Button, ButtonGroup } from "reactstrap";
class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container mt-3">
          {this.props.adminBlogs.map(singleBlog => (
            <div>
              <div className="row text-center shadow">
                <div className="mx-auto col-8 col-xs-4 col-sm-6 col-md-6 col-lg-3 p-2 my-auto">
                  <img
                    className="img-fluid  img-thumbnail"
                    src="http://photos.hamariweb.com/photos/Pakistan-Natural-Glacier-Deep-Freezer-Hunza-Pakistan-3006.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8  col-xs-10 col-sm-6 col-md-6 col-lg-3 p-2 mx-auto my-auto">
                  <h3 className="d-inline">{singleBlog.blogName}</h3> -{" "}
                  <h5 className="d-inline">{singleBlog.blogLocation}</h5>
                  <h6>{singleBlog.blogDescription.substring(0, 100)}...</h6>
                  <Button color="link">Click For More</Button>
                  <div>
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
                      <Button color="danger">Delete</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <hr className="m-3" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adminBlogs: state.adminBlogReducer
});

export default connect(mapStateToProps)(Blog);
