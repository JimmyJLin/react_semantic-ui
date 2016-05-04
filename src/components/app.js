import React from 'react';
import { Component } from 'react';
import Header from './header';
import Body from './body';

export default class App extends Component {
  render() {
    let content
    if(this.props.children === null) {
      content = <Body />
    } else {
      content = this.props.children
    }
    return (
      <div>
        <Header />
        {content}
      </div>
    )
  }
}
