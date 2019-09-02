import React, {Component} from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  } 
  render(){
    return (
      <HashRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route path = '/about' component = {About} />
              <Route path = '/contact' component = {Contact} />
              <Route path = '/:post_id' component = {Post} />
            </Switch> 
          </div>
      </HashRouter>  
    );
  }  
}

export default App;
