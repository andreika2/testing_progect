import React, { Component, PureComponent, Fragment } from "react";
import { render } from "react-dom";
class User extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return <div>
			<p>имя: {this.props.name}</p>
			<p>фамилия: {this.props.surname}</p>
			
			<button onClick={this.props.deleteUser.bind(null, this.props.index)}>
				удалить
			</button>
		</div>;
	}
}

export default User;