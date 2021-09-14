import React from 'react' 
import { Switch, Route } from 'react-router';
import './App.css'
import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Tours from './pages/Tours';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
    
  return (

    <div>
      <Navbar /> 
        <Switch>
          <Route exact path= '/Tours' component= {Tours}/>
          <Route exact path= '/About' component= {About}/>
          <Route exact path= '/Contact'  component= {Contact}/>
          <Route exact path= '/' component= {Homepage}/>                
        </Switch>
        
    </div>

  )}


export default App;