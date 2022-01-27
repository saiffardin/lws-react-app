import React, {Component} from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
        const {handleClick,lang} = props;

        this.state = {handleClick,lang};
    }

    shouldComponentUpdate(nxtProps) {
        const {handleClick: curr} = this.props;
        const {handleClick: next} = nxtProps;

        if (curr===next) {
            return false;
        }
        else{
            return true;
        }
    }

    render() {
        console.log('Button');
        return (
            <div>
                <button
                    onClick={()=>this.state.handleClick(this.state.lang)}>
                    Change in bn-BD
                </button> 
            </div>
        );
    }
}

export default Button;