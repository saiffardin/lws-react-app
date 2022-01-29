import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

const TemperatureInput = (props) => {

    const {temperature, scale, onTemperatureChange} = props;

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input
                value={temperature}
                onChange={(e)=> onTemperatureChange(e,scale)}
            />
        </fieldset>
    );

}

export default TemperatureInput;