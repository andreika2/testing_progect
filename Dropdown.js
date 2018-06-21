import React, { Component } from 'react';
import Vados from 'C:/Users/Andrei/Desktop/Learning/ts_progect/Node+React/React/helloworld/src/img/Vados.jpg';
import Andros from 'C:/Users/Andrei/Desktop/Learning/ts_progect/Node+React/React/helloworld/src/img/Andros.jpg';

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
            let dropdonwtext1;
            if (!this.state.isOpened) {
                dropdonwtext = ( < img src = { Vados }
                    />);
                }
                if (this.state.isOpened) {
                    dropdonwtext1 = ( < div > < img src = { Andros }
                        /></div > );
                }
                return ( < div onClick = { this.toggleState.bind(this) } > { dropdonwtext1 } { dropdonwtext } <
                    /div > );
                }
            }
            export default Dropdown;