import React from 'react';

const Text = ({func}) => {
    const text = 'I am Composition';
    return (
        <div>
            {func ? func(text, '😁') : text}
        </div>
    );
};

export default Text;