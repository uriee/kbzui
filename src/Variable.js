import React from 'react';
import {Listarr} from './Listarr';
import { Panel } from 'react-bootstrap';

export const Variable = React.createClass({
  displayname: "Variable",  

  render: function render() {  
  	const variable = this.props.value.variable;

	return (
		<Panel bsStyle="primary" header={variable.name}>
	    	<h1>{variable.name}</h1>
	    	<div>desc:{variable.desc}</div>
	    	<div>value:{variable.value}</div>
	    	<Listarr value={{list:variable.proposals ,message:"There is no proposals",name:"Proposals"}}/>
	    </Panel>
 	 )    
  }
});
