//import 'whatwg-fetch';
//import '@babel/polyfill';
//import 'regenerator-runtime/runtime';

import React, { Profiler } from "react";
import ReactDOM from "react-dom";

// Note: Using an Alias in Webpack
import Header from 'components/Header/';
import Menu from 'components/Menu/';
import Bottom from 'components/Bottom/';


class App extends React.Component { 

   render() {
	   
      return (
         <div>
            <Profiler id="TEST" onRender={(_, phase) => {
               console.log('phase', phase)
            }}>
               <Header />	 
                  <Menu />
               <Bottom />
            </Profiler>
         </div>
      );
   }
}

export default App;
