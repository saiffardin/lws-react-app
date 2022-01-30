// HOC file er naam 'with' diye shuru hoy
// HOC ekta 'component' param hishebe nei
// HOC return-o kore arekta 'component' 
import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0
        }

        handleIncrement = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1};
            })
        }

        render() {
            const {count} = this.state;

            return (
                <OriginalComponent
                    count={count}
                    handleIncrement={this.handleIncrement}
                />
            )
        }
    }

    return NewComponent;
}

export default withCounter;