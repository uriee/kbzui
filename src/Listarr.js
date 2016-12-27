import React from 'react';
import { ListGroup,ListGroupItem } from 'react-bootstrap';

export const Listarr = React.createClass({
  displayname: "Listarr", 

  render: function render() {  
    var i = 0;
    if(this.props.value.list.length > 0) return (
    	<div>
	    	<h3>{this.props.value.name}</h3>
	          <ListGroup>
	            {this.props.value.list.map((item) => {
                ++i;
	            return (
	              <ListGroupItem key={i}>{item}</ListGroupItem>
	              )}
	            )}
	          </ListGroup>
          </div>
        )
    else return (<div>{this.props.value.message}</div>)    
  }
});