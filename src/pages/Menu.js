import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,
     MDBNavItem, MDBNavLink, MDBIcon,MDBView,MDBMask,MDBContainer,
     MDBFooter,MDBRow,MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Carousel, Nav} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import "./menu.css";

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
                  <Nav.Link href="/About">About </Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/Menu">Menu</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/Order">Order</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Nav.Link href="/Location">Location</Nav.Link>
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
  


          <Carousel>
          

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/beef.jpg">
            <MDBMask overlay="blue-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}}>ZARDA CAFE </h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5" style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../Images/fish.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}}>ZARDA CAFE</h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5" style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/bhajia.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}} >ZARDA CAFE </h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5"  style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

         
          
          </Carousel>
        </header>
           


           {/*main */}
           <main>
           <div className="title">
            <h1>OUR MENU</h1>
            <p>Your Swahili Delight</p>
        </div>
        
     
        <div className="menu">
            <div className="images">
                <img src="../images/a.jpg" alt="home" />
                <p>Zarda cafe prepares delicious varieties of fresh 
                  swahili foods using highest quality ingredients.</p>
                <button className="button1">IN STORE MENU</button>
            </div>
            <div className="images">
                <img src="../images/b.jpg" alt="home"/>
                <p>Order in from  delivery menu and enjoy happiness at
                   home - swahili food made delicious and delivered fast.</p>
                <button className="button2">ORDER ONLINE</button>
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

