import React from 'react';


// Import of an asset usin alias in Webpack
import reactLogo from 'images/react.png';


class Home extends React.Component { 
   render() {
      return (
         <div>
           
		   <h2>Welcome</h2>
		   
		   <br />
            
           <img width="150px" src={reactLogo} alt="React Logo" /> 
		   			
           <h4>Webpack 5 configured from scratch to serve React</h4>

         </div>
      );
   }
}

export default Home;