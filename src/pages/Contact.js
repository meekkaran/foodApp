import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,
     MDBNavItem, MDBNavLink, MDBIcon,MDBContainer,
     MDBFooter,MDBRow,MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './contact.css';


class Contact extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: ' #0E3386'}
    return(
      <div>
        <header>
            <div className="topbar">
          <Router>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>Navbar</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBNavLink className="link" to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/About">About </Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/Menu">Menu</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/Order">Order</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/Menu">Location</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/Contact">Contact</Nav.Link>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          </div>
        </header>


        {/*contact page*/}
        <div className="app">
            <h1 className="h1">CONTACT US</h1>
            <p>For Your Favourite Swahili Dishes</p>
            <form>
                <h2>Say something...</h2>

                <label>Name</label>
                <input placholder="name"/>

                <label>email</label>
                <input placholder="Email"/>

                <label>Message</label>
                <textarea placeholder="Message"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
           
          
  {/*foter*/}
        <footer>
        <MDBFooter color="" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
          <h5 className="title">Favourites</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Gift cards</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Vouchers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Newsletters</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">How to Order</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Order Online</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Find a location</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Call</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Customer Services</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Terms and Conditions</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Connect with us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Customer care services</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">call 0713201600</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sign up</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> ZardaCafee.com@2021</a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </footer>


      </div>
    );
  }
}

export default Contact;

