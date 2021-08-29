import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
// import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar">
            <Link className="navlinks" to="/">Home</Link>
            {/* <Link to="/portfolio">Portfolio</Link> */}
            <Link className="navlinks" to="/contact">Contact</Link>
            <Link className="navlinks" to="/resume">Resume</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/portfolio">
              <Portfolio />
            </Route> */}
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer 
      />
    </div>
  );
}

export default App;

// the footer isnt stagnant
// 