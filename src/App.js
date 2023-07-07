import React from 'react';
import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';

import Nav from './components/Navs';
import About from './components/Footer';
import Temp from './components/Temp';
import Login from './components/Login';
import Landing from './components/Landing';
// import Search from './components/search';

// import SimpleBottomNavigation from './components/Bottomnav';
import Imagebackground from './img/bgnew.jpg'

function App() {
 
  return (
    <Fragment>
      <Router>
      <div className="App" style ={{backgroundSize: 'cover', backgroundImage: `url(${Imagebackground})`}} >
        <Nav />
          <Switch>
            {/* <Route path="*" element={<Redirect to="/" />} /> */}
            <Route path="/" exact component={Landing}/>
            <Route path="/about" exact component={About}/>
            <Route path="/temp" exact component={Temp}/>
            <Route path="/login" exact component={Login}/>
          </Switch>
          {/* <SimpleBottomNavigation /> */}        
      </div>
      </Router>
    </Fragment>
   
  );
}

export default App;
