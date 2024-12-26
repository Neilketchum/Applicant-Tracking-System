import React from 'react'
// import {About,Footer,Skills,Header,Testimonial,Work} from './container'
import {Navbar} from './components';
import './App.scss';
import { Header } from './container';
import WhyToUse from './container/WhyToUse/WhyToUse';
const App = () => {
  return (
    <div className='App'>
     <Navbar/> 
     <Header/>
     <WhyToUse/>
    </div>
  );
}

export default App;