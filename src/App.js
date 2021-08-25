import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
// import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            {/* <Link to="/portfolio">Portfolio</Link> */}
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
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
    </div>
  );
}

export default App;
