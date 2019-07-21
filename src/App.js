import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import OneBeer from './components/OneBeer/OneBeer'

function App() {
  return (
    <React.Fragment>
      <Home />
      <Switch>
        <Route exact path='/Home' render={() => {
          return <Home />
        }} />
        <Route exact path='/beers' render={() => {
          return <Beers />
        }} />
        <Route exact path='/random-beers' render={() => {
         return <RandomBeer />
        }} /> 
        <Route exact path='/OneBeer' render={() => {
         return <OneBeer/>
        }} />
        <Route path='/new-beers' render={() => {
          return <NewBeer />
        }} />
      </Switch>
    </React.Fragment>
  );
}
export default App;