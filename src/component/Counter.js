import {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1};
        })
    }
    render() {
        const {render} = this.props;
        const {count} = this.state;
        
        return render(count,this.handleIncrement);
    }
}

export default Counter;