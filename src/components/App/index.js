
import React from "react";
import ReactDOM from "react-dom";

// Note: Using an Alias in Webpack
import FrontPage from 'components/FrontPage/';
import Menu from 'components/Menu/';


class App extends React.Component { 

   render() {
	   
      return (
         <div>
		  
		  <Menu />
		  <FrontPage />
		
         </div>
      );
   }
}

export default App;