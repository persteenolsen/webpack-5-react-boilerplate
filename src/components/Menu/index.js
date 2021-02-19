
import React from "react";
import { Switch, Route, Link } from "react-router-dom";


import Home from 'components/Home/';
import About from 'components/About/';
import MyInfo from 'components/MyInfo/';

import Error from 'components/Error/';


// Import of an asset usin alias in Webpack
import webpackLogo from 'images/favicon.png';

export default function BasicRouterExample() {
  return (
   
      <div>
	    
        <Link to="/"><img width="50px" src={webpackLogo} alt="Webpack Logo" /></Link>   
		<Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/myinfo">Per Steen Olsen</Link> | <Link to="/error">Secret</Link>
         
		 <br /><br />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
		
        <Switch>
		
          <Route exact path="/">
            <Home />
          </Route>
		  
          <Route path="/about">
            <About />
          </Route>

		  
		   <Route path="/myinfo">
            <MyInfo />
          </Route>

		  <Route path="*" component={Error} />
		  
        </Switch>
		
      </div>
   
  );
}


