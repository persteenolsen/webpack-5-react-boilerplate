//import 'whatwg-fetch';
//import 'core-js/stable';

import React from "react";
import { Routes, Route, Link } from "react-router-dom";


import Home from 'components/Home/';
import About from 'components/About/';
import MyInfo from 'components/MyInfo/';

import { ListPosts } from 'components/ListPosts/';
import { SelectedPost } from 'components/SelectedPost/';
import { EditPost } from 'components/EditPost/';
import { CreatePost } from 'components/CreatePost/'; 


import Error from 'components/Error/';


// Import of an asset usin alias in Webpack
import webpackLogo from 'images/favicon.png';

export default function BasicRouterExample() {
  return (
       
	   <div>
	   
		<nav className="navbar navbar-expand-lg navbar-light">
                    
            <Link to="/">
			   <img width="50px" src={webpackLogo} alt="Webpack Logo" />
			</Link>
					
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
						
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	  	  
	            <div className="navbar-nav">
                       
					   <Link to="/" className="nav-item nav-link">Home</Link>
                       <Link to="/about" className="nav-item nav-link">About this App</Link>
					   <Link to="/myinfo" className="nav-item nav-link">Per Steen Olsen</Link>
					   <Link to="/listposts" className="nav-item nav-link">Web API</Link>
                       <Link to="/error" className="nav-item nav-link">Secret</Link>
                 
				 </div>
				
			   </div>
				
         </nav>
          
	    <br />
		 

        		
        <Routes>
		
          <Route exact path="/" element={<Home />}>
            
          </Route>
		  
          <Route exact path="/about" element={<About />}>
            
          </Route>
		  
		   <Route exact path="/myinfo" element={<MyInfo />}>
            
          </Route>
		  
		   <Route exact path="/listposts" element={<ListPosts />}>
            
          </Route>
		  
		   <Route exact path="/selectedpost/:id" element={<SelectedPost />}>
            
          </Route>
		  
		   <Route exact path="/editpost/:id" element={<EditPost />}>
            
          </Route>
		  
		    <Route exact path="/createpost" element={<CreatePost />}>
            
          </Route>

          
		  <Route path="*" element={<Error />}>
          </Route>
            
		  

        </Routes>
		
      </div>
   
  );
}


