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
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { history } from "../AppRouter/AppRouter";

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
              <i className="fas fa-globe-asia " /> Isle of Travellers{" "}
            </NavLink>

            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink
                  className="headerLinks"
                  activeClassName="selected"
                  to="/"
                >
                  {this.props.isAuthenticated && (
                    <p>Welcome {this.props.authID}</p>
                  )}
                </NavLink>
                <NavLink className="headerLinks" to="/">
                  {history.location.pathname === "/" ? (
                    <span className="text-monospace">
                      <u>Adventures</u>
                    </span>
                  ) : (
                    <span className="text-monospace">Adventures</span>
                  )}
                </NavLink>
                <NavLink className="headerLinks" to="/blogs">
                  {history.location.pathname === "/blogs" ? (
                    <span className="text-monospace">
                      <u>Blog</u>
                    </span>
                  ) : (
                    <span className="text-monospace">Blog</span>
                  )}
                </NavLink>
                <NavLink className="headerLinks" to="/contactUs">
                  {history.location.pathname === "/contactUs" ? (
                    <span className="text-monospace">
                      <u>Contact Us</u>
                    </span>
                  ) : (
                    <span className="text-monospace">Contact Us</span>
                  )}
                </NavLink>
                <UncontrolledDropdown
                  hidden={!this.props.isAuthenticated}
                  nav
                  inNavbar
                >
                  <DropdownToggle className="p-0" nav caret>
                    <span className="headerLinks m-0 p-0">Admin</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <NavLink to="/addBlog">
                      <DropdownItem>Add Blog</DropdownItem>
                    </NavLink>
                    <NavLink to="/mainPageImages">
                      <DropdownItem>Add Image on MainPage</DropdownItem>
                    </NavLink>
                    <NavLink to="/visitorReviews">
                      <DropdownItem>Customer Reviews</DropdownItem>
                    </NavLink>
                    <DropdownItem divider />
                    <NavLink to="/signUp">
                      <DropdownItem>Add Admin</DropdownItem>
                    </NavLink>
                    <DropdownItem
                      hidden={!this.props.isAuthenticated}
                      onClick={() => {
                        auth.signOut().catch(err => {
                          console.log(err);
                        });
                      }}
                    >
                      Sign Out
                    </DropdownItem>
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

const mapStateToProps = state => ({
  isAuthenticated: !!state.authReducer.uid,
  authID: state.authReducer.uid
});

export default connect(mapStateToProps)(Header);
