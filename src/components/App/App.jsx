import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Loop/Feeling.jsx';
import Understanding from '../Loop/Understanding.jsx';
import Support from '../Loop/Support.jsx';
import Comments from '../Loop/Comments.jsx';
import Review from '../Loop/Review.jsx';
import Loop from '../Loop/Loop.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>A survey</h1>
        <h4>of mostly nonsense</h4>
      </header>
      <Router>
        {/* Landing page is first question in loop, Feeling. */}
        <Route exact path="/">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path ="/loop">
          <Loop />
        </Route>
      </Router>
    </div>
  );
}

export default App;
