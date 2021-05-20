import React, { Component } from 'react';
import "./App.css";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [
        {description: "Learn ReactJS"},
        {description: "Learn Redux"},
        {description: "Learn NodeJS"}
      ],
      newTodo: "",
    }
  }

    handleAdd = (todo) => {
      this.setState({todos: [...this.state.todos, todo] , newTodo: ""})
    } 

    handleInput = (e) => {
      this.setState({newTodo: e.target.value})
    }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <AddTodo handleAdd={this.handleAdd} handleInput={this.handleInput} newTodo={this.state.newTodo}/>
        <TodoList tasks={this.state.todos}/>
      </div>
    )
  }
}
