import React from 'react';

class HoverComponent extends React.Component {

    render() {
        const {count,handleIncrement} = this.props;

        const myStyle = {
            display: "inline",
            maxWidth: "fitContent",
            color: "red"
        }

        return (
            <div>
                <h2 style={myStyle} onMouseEnter={handleIncrement}>Entered {count} times</h2>
            </div>
        );
    }
};

export default HoverComponent;