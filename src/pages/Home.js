import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,
     MDBNavItem, MDBNavLink, MDBIcon,MDBView,MDBMask,MDBContainer,
     MDBFooter,MDBRow,MDBCol } from 'mdbreact';
import {Nav} from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import './style.css';

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
          <MDBView src="../images/beef.jpg">
            <MDBMask overlay="blue-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}}>ZARDA CAFE </h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5" style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
              <button className="button"><a href="#">ORDER NOW ONLINE</a></button>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../images/fish.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}}>ZARDA CAFE</h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5" style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
              <button className="button"><a href="#">ORDER NOW ONLINE</a></button>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../images/bhajia.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="bounceInRight">
              <h2 className="head1" style={{fontSize:'70px'}} >ZARDA CAFE </h2>
              <h2 className="head2" style={{fontSize:'70'}}>YOUR SWAHILI DELIGHT</h2></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 className="head5"  style={{overflowY:'hidden'}}>BON .appetit.,
              </h5></Animated>
              <button className="button"><a href="#">ORDER NOW ONLINE</a></button>
            </MDBMask>
          </MDBView></Carousel.Item>

         
          
          </Carousel>
        </header>

        {/*featured items*/}
        <main>
        <div className="main">
            <h1>Featured</h1>
            <p>Your favourite swahili dishes</p>
        </div>
        <div className="featured">
            <div className="pichaz">
                <img src="../images/a.jpg" alt="home" />
            </div>
            <div className="pichaz">
                <img src="../images/b.jpg" alt="home"/>
            </div>
        </div>
        </main>

        {/* second last */}
        <div className="secondlast paragraph">
        
        </div>

        <Carousel>
        <Carousel.Item interval={4000}>
        <Animated  animationIn="bounceInRight"><p className="p">Good food is very often ,even most often,SIMPLE FOOD</p><br /></Animated>
        <div className="secondlast">
          <div className="row">
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/bhajia.jpg" style={{width:'100%'}} />
            </Animated>
            </div>
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/fish.jpg" style={{width:'100%'}} />
            </Animated>
            </div>
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/beef.jpg" style={{width:'100%'}} />
            </Animated>
          </div>
        </div>
        </div>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
        <Animated  animationIn="bounceInRight"><p className="p">Good food is very often ,even most often,SIMPLE FOOD</p><br /></Animated>
        <div className="secondlast">
          <div className="row">
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/bhajia.jpg" style={{width:'100%'}} />
            </Animated>
            </div>
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/fish.jpg" style={{width:'100%'}} />
            </Animated>
            </div>
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/beef.jpg" style={{width:'100%'}} />
            </Animated>
          </div>
        </div>
        </div>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
        <Animated  animationIn="bounceInRight"><p className="p">Good food is very often ,even most often,SIMPLE FOOD</p><br /></Animated>
        <div className="secondlast">
          <div className="row">
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/bhajia.jpg" style={{width:'100%'}} />
            </Animated>
            </div>
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/fish.jpg" style={{width:'100%'}} />
            </Animated>
            </div>
            <div className="column">
            <Animated animationIn="bounceInRight">
            <img src="../images/beef.jpg" style={{width:'100%'}} />
            </Animated>
          </div>
        </div>
        </div>
        </Carousel.Item>

        </Carousel>





        <div className="twitter">
        <a className="twitter-timeline" 
        href="https://twitter.com/ZardaCafe254?ref_src=twsrc%5Etfw">
          Tweets by ZardaCafe254</a> 
          <script async src="https://platform.twitter.com/widgets.js" 
          charset="utf-8">
          </script>
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
                <a href="/Order">Order Online</a>
              </li>
              <li className="list-unstyled">
                <a href="/Location">Find a location</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Call 0713201600</a>
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
                <a href="#!">customercare@zardacaffe.co.ke</a>
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

