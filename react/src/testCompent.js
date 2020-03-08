import React, { Component } from 'react';

export class Child extends Component{
         render() {
                 return (
                          <div>
                                   {this.props.name}
                          </div>
                 );
         }
         componentDidMount() {
                 console.log('mount',this.props.name)
         }
         componentDidUpdate() {
                 console.log('update',this.props.name)
         }
         componentWillUnmount() {
                 console.log('unmount',this.props.name)
         }
  
}