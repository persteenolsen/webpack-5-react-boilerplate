import React from 'react';

// Import of an asset usin alias in Webpack
import LOGO from 'images/logo_persteenolsen.jpg';


class MyInfo extends React.Component { 
   render() {
      return (
         <div>
		 
		
		   <h2>Per Steen Olsen</h2>
			
           <img src={LOGO} alt="Per Steen Olsen" />
		   
		   <br/> <br/>

         </div>
      );
   }
}

export default MyInfo;