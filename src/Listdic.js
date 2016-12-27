import React from 'react';
import { ListGroup,ListGroupItem } from 'react-bootstrap';

export const Listdic = React.createClass({
  displayname: "Ordi",  
  render: function render() {  
    var This = this;
    if(Object.keys(this.props.value.dic).length > 0) return (
    	<div>
	    	<h3>{this.props.value.name}</h3>
	          <ListGroup>
	            {Object.keys(this.props.value.dic).map((key) => {
	            return (
	              <ListGroupItem key={key}>{key} : {This.props.value.dic[key]}</ListGroupItem>
	              )}
	            )}
	          </ListGroup>
          </div>
        )
    else return (<div>{this.props.value.message}</div>)    
  }
});