import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Member} from './Member';
import {Statement} from './Statement';
import {Variable} from './Variable';
import {Pulse} from './Pulse';

const member =     {
  "PARENT": "users",
    "id": "06265889-6bee-417e-8a19-9cd7ae2916ee",
    "memberStatus": 1,
    "memberships": {
      "live": {
        "KBZ990ffa0af45328346ae1774adcab8": "d8874009-05cb-4cdd-9f50-e61b0cfa270c",
        "KBZbad8890cd40db8659618e5c210df0": "761916b3-d4c0-4989-911f-223f47f0695f"
      },
      "past": {}
    },
    "ownProposals": [
      "b0e929a5-4e1e-45af-bb7f-b7e45014514e",
      "bfa675e0-39fa-410b-8bd8-bfefb384f80d"
    ],
    "parent_member": "32b60e97-bfe2-46a9-8979-8a0a53181b72",
    "proposals": [],
    "userObj": {
      "age": 56,
      "email": "uri1@gmail.com",
      "id": "32b60e97-bfe2-46a9-8979-8a0a53181b72",
      "image": "http://phootoos/uri1.jpg",
      "memberships": {
        "live": {},
        "past": {}
      },
      "user_name": "uri1"
    }
  };

var statement =  {
    "dtype": "statement",
    "id": "a451fbc3-9f06-4c89-bacf-e919d7f13088",
    "proposals": [
      "3b0c0402-fadc-4c2c-86b3-bc802806ed3e"
    ],
    "statement": "with this one",
    "statementStatus": 1
  };

var variable =   {
      "desc": "The precentage of members vote nedded to Replace Statement.",
      "name": "Replace Statement",
      "proposals": [],
      "value": 60
    }; 

var pulse =   {
    "Approved": [
      "7e361254-0b8e-4536-a92b-82ce01775f67",
      "8c1196c9-e079-46e5-99b4-61e2c7cbc467",
      "6c714e04-b08d-440e-9f88-595de9dfc820",
      "7c8f2937-7913-4ca3-a2e3-f02432dfe1a5",
      "8f77efb4-193a-408e-a561-b7b1ec8091ac",
      "39d43454-b9a9-4f28-80e0-32a0e6891553"
    ],
    "Assigned": [],
    "OnTheAir": [
      "6c714e04-b08d-440e-9f88-595de9dfc820",
      "39d43454-b9a9-4f28-80e0-32a0e6891553",
      "7e361254-0b8e-4536-a92b-82ce01775f67",
      "8f77efb4-193a-408e-a561-b7b1ec8091ac",
      "8c1196c9-e079-46e5-99b4-61e2c7cbc467",
      "7c8f2937-7913-4ca3-a2e3-f02432dfe1a5"
    ],
    "Rejected": [],
    "id": "7c6fcc34-b95f-4cea-8b18-a141ad899b56",
    "pulseStatus": 3
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
        <Variable value={{variable}}/>
        <Statement value={{statement}}/>
        <Pulse value={{pulse}}/>
        <Member value={{member}}/>
      </div>
    );
  }
}

export default App;
