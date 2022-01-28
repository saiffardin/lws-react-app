import React, {Component} from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
        const {handleClick,lang} = props;

        this.state = {handleClick,lang};
    }

    shouldComponentUpdate(nxtProps) {
        const {lang: curr} = this.props;
        const {lang: next} = nxtProps;

        if (curr===next) {
            return false;
        }
        else{
            return true;
        }
    }

    render() {
        
        return (
            <div>
                <button
                    onClick={()=>this.props.handleClick(this.props.lang)}>
                    Change in {this.props.lang}
                </button> 
            </div>
        );
    }
}

export default Button;