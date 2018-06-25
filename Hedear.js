import React, { Component } from 'react';

class Hedear extends Component {
    render() {
        console.log('Items', this.props.items);
        return ( <
            div > {
                this.props.items.map((items, index) =>
                    <
                    a href = { items.link }
                    key = { index } > { items.label } < /a>
                )
            } <
            /div>
        );
    }
}
export default Hedear;