import React from 'react';
import {Listdic} from './Listdic';
import {User} from './User';
import { Panel } from 'react-bootstrap';

export const Proposal = React.createClass({
  displayname: "Proposal",  

  render: function render() { 
    const proposal = this.props.value.proposal;
	return (
      <Panel  bsStyle="primary" header={proposal.type+"-"+proposal.proposalStatus} >
      	<h1>{proposal.body}</h1>
		<Listdic value = {{dic:proposal, name:"Proposal"}}/>

	  </Panel>
    )
  }
});



//      	<Listdic value = {{dic:proposal, name:"Proposal"}}/>


	//    <h1>{proposal.body}</h1>
	 //   <div>{proposal.id}</div>
	 //   <div>age:{proposal.age}</div>
	 //   <div>parent_member :{proposal.parent_member}</div>
	 //   <div>initiator:{proposal.initiator}</div>
	 //   <Listdic value={{dic:proposal.support, message:"No Support", name:"Support"}}/>
	 //   <Listdic value={{dic:proposal.votes, message:"No votes", name:"Votes"}}/>