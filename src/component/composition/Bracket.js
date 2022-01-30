import React from 'react';

const Bracket = (props) => {

    const addBracket = (txt) => `[ ${txt} ]`
    return (
        <div>
            {props.children({addBracket})}
        </div>
    );
};

export default Bracket;