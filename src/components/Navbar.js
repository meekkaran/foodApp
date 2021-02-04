import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon,MDBView,MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import './style.css';

class Navbar extends React.Component {
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
    const bgPink = {backgroundColor: '#4682B4'}
    return(
      <div>
        <header>
          <Router>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>Navbar</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Order</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Menu</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Location</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact</MDBNavLink>
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

          <Carousel>
          

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/beef.jpg">
            <MDBMask overlay="blue-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>ZARDA CAFE </h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5" style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p className="p">Good food is very often ,even most often,SIMPLE FOOD</p><br /></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../Images/fish.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>ZARDA CAFE</h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5" style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
              <Animated  animationIn="bounceInRight"><p className="p">Good food is very often ,even most often,SIMPLE FOOD</p><br /></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/bhajia.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
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
      </div>
    );
  }
}

export default Navbar;
