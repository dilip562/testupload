import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route,Link} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Profile from './component/Profile'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Switch>
        <Route path= "/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Switch> */}

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Profile />
          </Route>
        </Switch>
      </div>
        
    </BrowserRouter>
  )
}

export default App


