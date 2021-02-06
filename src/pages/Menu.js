import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,
     MDBNavItem, MDBNavLink, MDBIcon,MDBView,MDBMask,MDBContainer,
     MDBFooter,MDBRow,MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';

class Menu extends React.Component {
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
                      <MDBNavLink className="link" to="/Menu">Order</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink className="link" to="#">Menu</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="/About">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="#">Location</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="#">Contact</MDBNavLink>
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

          <Carousel>
          

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/1.jpg">
            <MDBMask overlay="blue-light" className="flex-center flex-column text-white text-center">
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../Images/meat.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/2.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            </MDBMask>
          </MDBView></Carousel.Item>

          </Carousel>
        </header>
           


           {/*main */}
           <main>
           <div>
            <h1>OUR MENU</h1>
        </div>
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="photos">
                    <img src="../images/a.jpg" />
                    <button>IN STORE MENU</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="photos">
                    <img src="../images/b.jpg" />
                    <button>ORDER FOR DELIVERY</button>
                </div>
            </div>
        </div>
        </div>
           </main>


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

export default Menu;

