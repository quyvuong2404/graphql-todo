import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleSave(text) {
    if (text.length !== 0) {
      this.props.dispatch(addTodo(text));
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo
          onSave={(text) => this.handleSave(text)}
          placeholder="what needs to be done?" />
      </header>
    );
  }
}

export default Header;
