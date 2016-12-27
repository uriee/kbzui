import React from 'react';
import {Listdic} from './Listdic';
import { Panel } from 'react-bootstrap';

export const User = React.createClass({
  displayname: "User",  

  render: function render() {  
  	const user = this.props.value.user;
	const live = user.memberships.live;
	const past = user.memberships.past;
	return (
	  <Panel >
	    <h1>{user.user_name} : {user.email}</h1>
	    <div>age:{user.age}</div>
	    <div>id:{user.id}</div>
	    <div>image:{user.image}</div>
	    <Listdic value={{dic:live,message:"There is no live Memberships",name:"Live Memberships"}}/>
	    <Listdic value={{dic:past,message:"There is no past Memberships",name:"Past Memberships"}}/>	    
	  </Panel>
 	 )    
  }
});




   