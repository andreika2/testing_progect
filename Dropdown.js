import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        console.log('isOpened : ', this.state.isOpened);
        let dropdonwtext;
        if (this.state.isOpened) {
            dropdonwtext = < div > Here is what is show dropdown < /div>;
        }
        return ( < div onClick = { this.toggleState.bind(this) } >
            It Dropdown moduls { dropdonwtext } <
            /div > );
        }
    }
    export default Dropdown;