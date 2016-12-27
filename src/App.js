import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Listdic} from './Listdic';
import {User} from './User';

const userobj = {
      "age": 56,
      "email": "uri1@gmail.com",
      "id": "32b60e97-bfe2-46a9-8979-8a0a53181b72",
      "image": "http://phootoos/uri1.jpg",
      "memberships": {
        "live": {a:1,v:'uriiru'},
        "past": {}
      },
      "user_name": "uri1"
    };


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Listdic value={{dic:{a:1,b:2,c:3}, message:"hello"}} ></Listdic>
        <Listdic value={{dic:{a:1,b:6,c:'hello'}, message:"hello"}} />
        <User value={{user:userobj}}/>
      </div>
    );
  }
}

export default App;
