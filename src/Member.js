import React from 'react';
import {Listdic} from './Listdic';
import {Listarr} from './Listarr';
import {User} from './User';
import { Panel } from 'react-bootstrap';

export const Member = React.createClass({
  displayname: "Member",  

  render: function render() { 
    const member = this.props.value.member;
	return (
	  <Panel  bsStyle="primary" header={member.userObj.user_name} >
	    <h1>{member.id} </h1>
	    <div>memberStatus:{member.memberStatus}</div>
	    <Listdic value={{dic:member.memberships.live, message:"No Live Memberships", name:"Live Memberships"}}/>
	    <Listdic value={{dic:member.memberships.past, message:"No Past Memberships", name:"Past Memberships"}}/>
	    <Listdic value={{dic:member.ownProposals, message:"No Own Proposals", name:"Own Proposals"}}/>
	    <div>parent_member : {member.parent_member}</div>
	    <Listarr value={{list:member.proposals, message:"no Proposals", name:"Proposals"}}/>
	    <User value={{user:member.userObj}}/>
	  </Panel>
    )
  }
});



