import React from 'react';

// Import of an asset usin alias in Webpack
import LOGO from 'images/logo_persteenolsen.jpg';

// Import of an asset usin alias in Webpack
import webpackLogo from 'images/webpack-logo.svg';

class FrontPage extends React.Component { 
   render() {
      return (
         <div>
		 
		   A Web Application by Webpack 5 with React
		   
		   <br />
            
           <img src={webpackLogo} alt="Webpack Logo" /> 

		
         </div>
      );
   }
}

export default FrontPage;