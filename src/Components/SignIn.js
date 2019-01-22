import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
class SignIn extends React.Component {
  render() {
    return (
      <div className="container signIn">
        <div>
          <div className="row">
            <div className="col display-4 text-center ">
              <i className="fas fa-user-astronaut " />
            </div>
          </div>
          <div className="row text-center">
            <div className="col display-4">Login</div>
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
                />
              </FormGroup>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-10 col-xs-10 col-sm-8 col-md-6 col-lg-5 mx-auto">
              <Button color="primary" block>
                Enter
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;

// <Form className="p-3">
//   <div className="container signInForm  border p-5">
//     <div className="row text-center p-2 ">
//       <div className="col-12 col-xs-12 col-sm-12 col-md-8 display-4 mx-auto">
//         <i className="fas fa-user-astronaut" />
//       </div>
//     </div>

//     <div className="col-12 col-xs-12 col-sm-12 col-md-8 display-4 p-3">
//       Login
//             </div>

//     <div className="col-12 col-xs-12 col-sm-12 col-md-8">
//       <div className="m-2 text-center">
//         <FormGroup>
//           <Input
//             className=""
//             type="email"
//             name="email"
//             id="exampleEmail"
//             placeholder="Email"
//           />
//         </FormGroup>
//       </div>
//     </div>
//     <div className="col-12 col-xs-12 col-sm-12 col-md-8">
//       <FormGroup className="text-center m-2">
//         <Input
//           type="password"
//           name="email"
//           id="exampleEmail"
//           placeholder="Password"
//         />
//       </FormGroup>
//     </div>
//     <div className="col-12 col-xs-12 col-sm-12 col-md-8">
//       <Button block>Sign In</Button>
//     </div>
//   </div>
// </Form>
