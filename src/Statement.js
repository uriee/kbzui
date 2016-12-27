import React from 'react';
import {Listarr} from './Listarr';
import { Panel } from 'react-bootstrap';

export const Statement = React.createClass({
  displayname: "Statement",  

  render: function render() {  
  	const statement = this.props.value.statement;

	return (
	  <Panel >
	    <h1>{statement.statement}</h1>
	    <div>status:{statement.status}</div>
	    <div>id:{statement.id}</div>
	    <Listarr value={{list:statement.proposals ,message:"There is no proposals",name:"Proposals"}}/>
	  </Panel>
 	 )    
  }
});
