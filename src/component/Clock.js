import React, {Component} from 'react';
import Button from './Button';

class Clock extends Component {

    state =
        {
            date: new Date(),
            lang: 'en-US'
        };

    componentDidMount() {
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000)
    }


    handleClick = (lang) => {
        // console.log(lang);
        this.setState({lang});
    }


    render() {

        let time = this.state.date.toLocaleTimeString(this.state.lang);
        return (
            <div>
                <h1>Clock : {time}</h1>
                {this.state.lang === 'bn-BD' ?
                    <Button
                        handleClick={this.handleClick}
                        lang={'en-US'}
                    />
                    :
                    <Button
                        handleClick={this.handleClick}
                        lang={'bn-BD'}
                    />
                }
                <hr />
            </div>
        );
    }
}

export default Clock;