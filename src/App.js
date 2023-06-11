import React, { useEffect } from 'react'
import './App.css';
import Sidenav from './components/Sidenav';
import Contentarea from './components/Contentarea';
import Flipkart from './Flipkart/Flipkart';
import Search from './Flipkart/Search';
import Login from './components/Login';


function App() {

  useEffect(()=>{
    return () =>{};
  },[])
  return (
    <div className="App">
     <div className='app-layout'>
     <Sidenav/>
      <Contentarea>
      <Search/>
      <Login/>
      <Flipkart/>
      
      </Contentarea>
     </div>
    </div>
  );
}

export default App;
