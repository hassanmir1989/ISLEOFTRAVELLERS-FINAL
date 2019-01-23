import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { auth } from "../firebase/firebase";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="container mt-2">
            <NavLink className="navbarBrand font-italic" to="/">
              <i className="fas fa-globe-asia" /> Isle of Travellers{" "}
            </NavLink>

            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink
                  className="headerLinks"
                  activeClassName="selected"
                  to="/"
                >
                  Adventures
                </NavLink>
                <NavLink className="headerLinks" to="/blogs">
                  Blog
                </NavLink>
                <NavLink className="headerLinks" to="/contactUs">
                  Contact Us
                </NavLink>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="p-0" nav caret>
                    <span className="headerLinks m-0 p-0">Admin</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <NavLink to="/addBlog">
                      <DropdownItem>Add Blog</DropdownItem>
                    </NavLink>
                    <NavLink to="/visitorReviews">
                      <DropdownItem>Customer Reviews</DropdownItem>
                    </NavLink>
                    <DropdownItem divider />

                    <DropdownItem
                      onClick={() => {
                        auth.signOut().then(
                          () => {
                            console.log("signout");
                          },
                          err => {
                            console.log(err);
                          }
                        );
                      }}
                    >
                      Sign Out
                    </DropdownItem>

                    <NavLink to="/logIn">
                      <DropdownItem>Log In</DropdownItem>
                    </NavLink>
                    <NavLink to="/signUp">
                      <DropdownItem>Sign Up</DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
