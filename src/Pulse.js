import React from 'react';
import {Listarr} from './Listarr';
import { Panel } from 'react-bootstrap';

export const Pulse = React.createClass({
  displayname: "Pulse",  

  render: function render() {  
  	const pulse = this.props.value.pulse;

	return (
	  <Panel >
	    <h1>{pulse.id}</h1>
	    <div>Status: {pulse.status}</div>
	    <Listarr value={{list:pulse.Approved,message:"There are no Approved proposals",name:"Approved"}}/>
	    <Listarr value={{list:pulse.Assigned,message:"There are no Assigned proposals",name:"Assigned"}}/>
	    <Listarr value={{list:pulse.OnTheAir,message:"There are no OnTheAir proposals",name:"OnTheAir"}}/>	    
	    <Listarr value={{list:pulse.Rejected,message:"There are no Rejected proposals",name:"Rejected"}}/>
	  </Panel>
 	 )    
  }
});