import React, { Component, PureComponent, Fragment } from "react";
import { render } from "react-dom";
import './App.css';
class Scope extends Component {
    state = {
        users: []
    };
    addTop = name => {
        this.setState(state => ({
            users: [{ id: state.users.length + 1, name }, ...state.users]
        }));
    };

    render() {
        return ( <
            Fragment >
            <
            AddName addTop = { this.addTop }

            /><
            Users names = { this.state.users }
            /> < /
            Fragment >
        );
    }
}

class AddName extends PureComponent {
    getInput = el => {
        this.input = el;
    };
    addToTop = () => {
        if (!this.input.value.trim()) {
            return;
        }
        this.props.addTop(this.input.value);
        this.input.value = "";
    };

    render() {
        return ( <
            Fragment >
            <
            input className = "form"
            ref = { this.getInput }
            /> <
            button className = "butten"
            onClick = { this.addToTop } > Добавить запись в список < /button>  <
            h3 > Все записи: < /h3> < /
            Fragment >
        );
    }
}

class Users extends PureComponent {
    render() {
            return ( <
                ul > {
                    this.props.names.map(user => < Name key = { user.id } > { user.name } < /Name>)} < /
                        ul >
                    );
                }
            }

            class Name extends PureComponent {

                render() {
                    return <li className = "li" > { this.props.children } < /li>;
                }
            }
            export default Scope;