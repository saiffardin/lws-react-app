import React, {Component} from 'react';
import {convert, toCelsius, toFahrenheit} from '../lib/converter';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends Component {

    state =
        {
            temperature: '',
            scale: 'c'
        };

    onTemperatureChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        });
    }

    render() {
        const {temperature, scale} = this.state;

        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;


        return (
            <div>
                <TemperatureInput
                    temperature={celsius}
                    scale={'c'}
                    onTemperatureChange={this.onTemperatureChange}>
                </TemperatureInput>

                <TemperatureInput
                    temperature={fahrenheit}
                    scale={'f'}
                    onTemperatureChange={this.onTemperatureChange}>

                </TemperatureInput>


                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        );
    }
}

export default Calculator;