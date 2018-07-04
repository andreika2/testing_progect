import React, { Component, PureComponent, Fragment } from "react";
import { render } from "react-dom";
import Node from './Node';

import './App.css';



class User extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div>
		<ul>
			
			<li className = "li">
			<p><h4>{this.props.name}</h4></p>
			<p><h4>Время добавления : {this.props.surname}</h4></p>
			
			<button className = "red" onClick={this.props.deleteUser.bind(null, this.props.index)}>
				Удаление
			</button>
			<button className = "yellow">
				Редактировние
			</button>
			</li>
		</ul>
		</div>);
	}
}

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			users: []
		};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	//Удаляем заданный элемент:
	deleteUser(index) {
		this.state.users.splice(index, 1);
		this.setState({users: this.state.users});
	}
	
	render() {

		const users = this.state.users.map((item, index) => {
			
			return (
			
				
			<div>
				
				<User
				key={index}
				index={index}
				name={item.name}
				surname={item.surname}
				deleteUser={this.deleteUser.bind(this)}
			/>
			</div>
			
			);
		});

		return (
		<div className = "main-contener">
		<div className = "main">
			<h1 className = "head">Ежедневник Алфа</h1>
			<h2 htmlFor="new-todo">
            Что будем делать сегодня ?
            </h2>
			<form onSubmit={this.handleSubmit}>
          <input
            className = "form"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button className = "green">
            Добавить дело
          </button>
        </form>
			<h3 className = "h3">Список дел : </h3>
			{users}
		</div>
		</div>);
	}

	handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      id: Date.now(),
      surname : new Date().toLocaleTimeString()
    };
    this.setState(prevState => ({
      users: prevState.users.concat(newItem),
      name: ''
    }));
  }
}


export default App;