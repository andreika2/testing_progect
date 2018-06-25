import React, { Component, PureComponent, Fragment } from "react";
import { render } from "react-dom";
import Scope from './Scope';
import './App.css';



class App extends Component {


    render() {
        return ( <
            html className = "main" >
            <
            h1 className = "head" > Ежедневние Альфа < /h1> <
            Scope /
            >
            <
            /
            html > );
    }
}
export default App;