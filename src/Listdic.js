import React from 'react';
import {Panel, ListGroup,ListGroupItem } from 'react-bootstrap';
import {Listarr} from './Listarr';


export const Listdic = React.createClass({
  displayname: "Ordi",  
  render: function render() {  
    var This = this;
    if(Object.keys(this.props.value.dic).length > 0) return (
    	<div  >
        <h3>{this.props.value.name}</h3>
	          <ListGroup>
	            {Object.keys(this.props.value.dic).map((key) => {
                const val = This.props.value.dic[key];
                if (Array.isArray(This.props.value.dic[key])) return <Listarr key={key} value={{list:This.props.value.dic[key], message:'emptyList',name:this.props.value.name+':'+key}}/>
                if (val !== null && typeof val === 'object') return <Listdic key={key} value={{dic:This.props.value.dic[key], message:"there is no "+this.props.value.name+':'+key,name:this.props.value.name+':'+key}}/>
	            return (
	              <ListGroupItem key={key} header={key}>  {This.props.value.dic[key]}
       
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