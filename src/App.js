import './App.css';
import React , { useState, useCallback }                                      from 'react';
import {BrowserRouter as Router, Route , Redirect , Switch} from 'react-router-dom'

import MainHeader                                  from './Components/Nav/MainHeader'
import HomePage                                    from './Components/Home/HomePage';
import AboutUs                                    from './Components/Home/AboutUs';
import Contact                                    from './Components/Home/Contact';




const App = () => {

  return (
    <Router>
      <MainHeader/>
        <Switch>
            <Route path="/"        exact>  <HomePage/>  </Route>
            <Route path="/AboutUs" >  <AboutUs/>   </Route>
            <Route path="/Contact" t>  <Contact/>   </Route>
        </Switch>
    </Router>
 
  );
}

export default App;
