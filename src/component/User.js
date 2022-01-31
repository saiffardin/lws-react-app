import React from 'react';

const User = (props) => {

    const {name} = props;
    return (
        <div>
            <h2>{name(true)}</h2>
        </div>
    );
}

export default User;