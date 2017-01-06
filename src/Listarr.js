import React from 'react';
import { Panel, ListGroup,ListGroupItem } from 'react-bootstrap';

export const Listarr = React.createClass({
  displayname: "Listarr", 

  render: function render() {  

    if(this.props.value.list.length > 0) return (
      <div  >
      <h3>{this.props.value.name}</h3>

	          <ListGroup >
	            {this.props.value.list.map((item,idx) => {
	            return (
	              <ListGroupItem key={idx.toString()} href="#" bsStyle="info">{item}</ListGroupItem>
	              )}
	            )}
	          </ListGroup>
          </div>
        )
    else return (<div>{this.props.value.message}</div>)    
  }
});