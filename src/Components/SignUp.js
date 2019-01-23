import React from "react";
import { Button, Form, FormGroup, Alert, Input } from "reactstrap";
import { auth } from "../firebase/firebase";
class SignUp extends React.Component {
  constructor() {
    super();
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChangEmail = this.onChangEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }
  onChangEmail(e) {
    e.persist();
    const email = e.target.value;
    this.setState(() => ({
      email
    }));
  }

  onChangePassword(e) {
    e.persist();
    const password = e.target.value;
    this.setState(() => ({
      password
    }));
  }
  onSubmitForm() {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState(() => ({
          error: ""
        }));
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState(() => ({
          error: err.message
        }));
      });
  }
  render() {
    return (
      <div className="container signIn">
        <div>
          <div className="row">
            <div className="col display-5 text-center ">
              {this.state.error && (
                <Alert color="danger">{this.state.error}</Alert>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col display-4 text-center ">
              <i className="fas fa-user-astronaut " />
            </div>
          </div>
          <div className="row text-center">
            <div className="col display-4">Sign Up</div>
          </div>
          <div className="row mt-3">
            <div className="col-10 col-xs-10 col-sm-8 col-md-6 col-lg-5 mx-auto">
              <FormGroup>
                <Input
                  className=""
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChangEmail}
                />
              </FormGroup>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-10 col-xs-10 col-sm-8 col-md-6 col-lg-5 mx-auto">
              <FormGroup>
                <Input
                  className=""
                  type="password"
                  name="email"
                  id="exampleEmail"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </FormGroup>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-10 col-xs-10 col-sm-8 col-md-6 col-lg-5 mx-auto">
              <Button onClick={this.onSubmitForm} color="primary" block>
                Enter
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
