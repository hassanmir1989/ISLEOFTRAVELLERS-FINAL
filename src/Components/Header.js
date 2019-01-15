import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

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
        <Navbar color="light" light expand="lg">
          <div className="container mt-2">
            <NavbarBrand className="font-italic">
              <i className="fas fa-globe-asia" /> Isle of Travellers{" "}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="navitem">
                  <NavLink className="headerLink" to="/">
                    Adventures
                  </NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink className="headerLink" to="/blog">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink className="headerLink" to="/contactus">
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink className="headerLink" to="/admin">
                    Admin
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
