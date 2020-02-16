import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import join from './components/Join';
import Chat from './components/Chat';

const App = () => (  
    <Router>
     <Route Path='/' exact component={join} />
    <Route Path='/chat' component={Chat} />
    </Router>
    );
export default App;