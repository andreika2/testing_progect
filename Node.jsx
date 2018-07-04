import React, { Component, PureComponent, Fragment } from "react";
import { render } from "react-dom";
import './App.css';

class Node extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = { items: [], text: '' , date: new Date().toLocaleTimeString()};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  render() {
    return (
      <div>
         <h2 htmlFor="new-todo">
            Что будем делать сегодня ?
          </h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className = "form"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className = "butten">
            Добавить дело
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

 

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      date : new Date().toLocaleTimeString()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
   
  render() {
    return (
      <ul>
          <h3 className = "h3">Список дел : </h3>
        {this.props.items.map(item => (
        <form>
          <li className = "li" key={item.id}>
              {item.text}
              <p>Время добавления : {item.date}</p>
              <button > Удалить </button >
              <button> Редактировать </button >
              </li>
              </form>
        ))}
      </ul>
    );
  }
}
export default Node;