
import React from "react";
import { Switch, Route, Link } from "react-router-dom";


// Note: Using an Alias in Webpack
import MyInfo from 'components/MyInfo/';
import Content from 'components/Content/';


export default function BasicRouterExample() {
  return (
   
      <div>
	    
         <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/content">Content</Link> | <Link to="/myinfo">Per Steen Olsen</Link>
         

        <hr />

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
		  
		  
		   <Route path="/content">
            <Content />
          </Route>
		  
		   <Route path="/myinfo">
            <MyInfo />
          </Route>

		  
        </Switch>
		
      </div>
   
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
