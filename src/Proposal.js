import React from 'react';
import {Listdic} from './Listdic';
import {User} from './User';
import { Panel } from 'react-bootstrap';

export const Proposal = React.createClass({
  displayname: "Proposal",  

  render: function render() { 
    const proposal = this.props.value.proposal;
	return (
	  <Panel >
	    <h2>{proposal.type}-{proposal.proposalStatus} </h2>
	    <h1>{proposal.body}</h1>
	    <div>{proposal.id}</div>
	    <div>age:{proposal.age}</div>
	    <div>parent_member :{proposal.parent_member}</div>
	    <div>initiator:{proposal.initiator}</div>
	    <Listdic value={{dic:proposal.support, message:"No Support", name:"Support"}}/>
	    <Listdic value={{dic:proposal.votes, message:"No votes", name:"Votes"}}/>
	  </Panel>
    )
  }
});






