import React from 'react';
import withCounter from './HOC/withCounter';

class HoverComponent extends React.Component {

    render() {
        const {count,handleIncrement} = this.props;

        const myStyle = {
            display:"inline",
            maxWidth:"fitContent",
            color: "red"
        }

        return (
            <div>
                <h2 style={myStyle} onMouseEnter={handleIncrement}>Entered {count} times</h2>
            </div>
        );
    }
};

export default withCounter(HoverComponent);