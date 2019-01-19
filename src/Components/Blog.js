import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Media, Button } from "reactstrap";
class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container mt-3">
          <div className="row text-center shadow">
            <div className="mx-auto col-8 col-xs-4 col-sm-6 col-md-6 col-lg-3 p-2 my-auto">
              <img
                className="img-fluid  img-thumbnail"
                src="http://photos.hamariweb.com/photos/Pakistan-Natural-Glacier-Deep-Freezer-Hunza-Pakistan-3006.jpg"
                alt=""
              />
            </div>
            <div className="col-8  col-xs-10 col-sm-6 col-md-6 col-lg-5 p-2 mx-auto my-auto">
              <h3 className="d-inline">Hunza Trip</h3> -{" "}
              <h5 className="d-inline">Kuwait</h5>
              <h6>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aspernatur ratione, dicta sed magnam tempore
                voluptatum unde....
              </h6>
              <Button color="link">Click For More</Button>
            </div>
          </div>
          <hr className="m-3" />
          <div className="row text-center shadow">
            <div className="mx-auto col-8 col-xs-4 col-sm-6 col-md-6 col-lg-3 p-2 my-auto">
              <img
                className="img-fluid  img-thumbnail"
                src="https://media-cdn.tripadvisor.com/media/photo-s/11/58/63/a3/lady-finger-6000m-hunza.jpg"
                alt=""
              />
            </div>
            <div className="col-8  col-xs-10 col-sm-6 col-md-6 col-lg-5 p-2 mx-auto my-auto">
              <h3 className="d-inline">Hunza Trip</h3> -{" "}
              <h5 className="d-inline">Kuwait</h5>
              <h6>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aspernatur ratione, dicta sed magnam tempore
                voluptatum unde, eius natus nihil nisi placeat repellat commodi
                quaerat velit? Nostrum vel sequi eius.
              </h6>
            </div>
          </div>
          <hr className="m-3" />
        </div>
      </div>
    );
  }
}

export default connect()(Blog);
