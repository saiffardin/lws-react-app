import React from 'react';

class ClickComponent extends React.Component {
    
    render() {
        const {count,handleIncrement} = this.props;
        
        return (
            <div>
                <button onClick={handleIncrement}>Clicked {count} times</button>
            </div>
        );
    }
};

export default ClickComponent;