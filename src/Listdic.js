import React from 'react';
import { ListGroup,ListGroupItem } from 'react-bootstrap';
import {Listarr} from './Listarr';

export const Listdic = React.createClass({
  displayname: "Ordi",  
  render: function render() {  
    var This = this;
    if(Object.keys(this.props.value.dic).length > 0) return (
    	<div>
	    	<h3>{this.props.value.name}</h3>
	          <ListGroup>
	            {Object.keys(this.props.value.dic).map((key) => {
                if (Array.isArray(This.props.value.dic[key])) return <Listarr value={{list:This.props.value.dic[key], message:'emptyList',name:this.props.value.name+':'+key}}/>
	            return (
	              <ListGroupItem key={key}> {key} : {This.props.value.dic[key]}
       
                </ListGroupItem>
	              )}
	            )}
	          </ListGroup>
          </div>
        )
    else return (<div>{this.props.value.message}</div>)    
  }
});

/*
                    if (Array.isArray(This.props.value.dic[key])){
                     return  <Listarr value={{list:This.props.value.dic[key], message:'emptyList',name:key}}/>
                    }else 
                    */