
import './App.css';
import {React,BrowserRouter as Router ,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Location from './pages/Location';
import Contact from './pages/Contact';
function App() {
  return (
    <>
    <Router>
      <Route  exact path="/"  component ={Home} />
      <Route exact path="/About" component ={About}/>
      <Route exact path="/Menu" component ={Menu} />
      <Route exact path="/Order" component ={Order} />
      <Route exact path="/Location" component ={Location} />
      <Route exact path="/Contact" component ={Contact} />
    </Router>
    </>
    
  );
}

export default App;
