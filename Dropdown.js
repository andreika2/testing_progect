import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ""
        }
        this.state = { IsCliced: false }
        this.Cliced = this.Cliced.bind(this);
        this.Submitet = this.Submitet.bind(this);
    }

    Submitet(event) {
        event.preventDefault();
        console.log("This val is : ", this.state.val);
    }

    Cliced(event) {
        console.log("This add in input : ", event.target.value);
        let text = this.setState({ val: event.target.value });

    }
    Ref() {
        this.setState({ IsCliced: !this.state.IsCliced });
    }

    render() {
        let newinputtext;
        if (this.state.IsCliced) {
            newinputtext = < h1 > { this.state.val } < /h1>
        }
        return ( < form onSubmit = { this.Submitet.bind(this) } > { newinputtext } <
            input type = "text"
            placeholder = "value"
            onChange = { this.Cliced.bind(this) }
            /> <
            button onClick = { this.Ref.bind(this) } > Изменить < /button> < /
            form > );
    }
}
export default Dropdown;