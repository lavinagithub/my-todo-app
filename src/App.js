import React from "react";
import Todoitem from "./Todoitem";
import "./index.css";
import todosData from "./todosData";

export class App extends React.Component {
  constructor() {
    super();

    this.state = { todos: todosData };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      //alert((JSON.stringify(prevState.todos[0].id)));
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoiTems = this.state.todos.map((item) => (
      <Todoitem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoiTems}</div>;
  }
}

export default App;
