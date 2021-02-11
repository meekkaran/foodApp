import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,
     MDBNavItem, MDBNavLink, MDBIcon,MDBView,MDBMask,MDBContainer,
     MDBFooter,MDBRow,MDBCol } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Carousel, Nav} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import './About.css';

class Home extends React.Component {
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
  


          <Carousel>
          

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/1.jpg">
            <MDBMask overlay="blue-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}}>ZARDA CAFE </h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5" style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p className="p">Good food is very often ,even most often,SIMPLE FOOD</p><br /></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../Images/meat.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}}>ZARDA CAFE</h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5" style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p className="p">Good food is very often ,even most often,SIMPLE FOOD</p><br /></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/2.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}} >ZARDA CAFE </h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5"  style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p className="p">Good food is very often ,even most often,SIMPLE FOOD</p><br /></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

         
          
          </Carousel>

        </header>
         <div className="about">
             <h1>WE OFFER</h1>
             <p>
             Artcaffé is a full-service and on-the-move bakery, coffee shop, bar, and restaurant for all ages.
             We offer fresh, great-tasting and high-quality food consistently in a relaxed yet sophisticated 
             setting. Whether meeting up with friends for Happy Hour, catching a coffee with a colleague, or 
             enjoying an early family dinner with the kids – our stores are versatile and welcoming to all.
             <br/>

             We bake fresh, artisanal bread and pastries; we brew real, rich Kenyan coffee; we craft signature 
             cocktails and we lead the way in modern casual dining in Kenya.
             <br/>

             Even more than good food and great people, Artcaffé is about the atmosphere. Nairobi is vibrant and
             diverse, and each Artcaffé restaurant has a unique design and distinct style suited to its part of 
             the city. You know you are in the heart of the city and the hub of 
             East Africa when visiting Artcaffé.
             </p>
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

export default Home;

