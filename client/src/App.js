import React, { Component } from 'react'
import { BrowserRouter as Route, Router} from 'r';
import join from './components/join'
import Chat from './components/Chat'

const App = () => (  
    <Router>
    <Route Path='/' exact component={join} />
    <Route Path='/chat' exact component={Chat} />

    
    </Router>
    );
export default App;