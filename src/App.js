import React from 'react' 
import { Switch, Route } from 'react-router';
import Homepage from './pages/Homepage';
import './App.css'
import Hats from './components/Hats';


const App = () => {
  const HatsPage = () => {
    <div>
      <h2>Hats</h2>
    </div>
  }


  return (
    <div>
      <Switch>
        <Route exact path='/hats' component={Hats} />
        <Route exact path= '/' component= {Homepage}/>
      </Switch>
      
    </div>

  )}


export default App;