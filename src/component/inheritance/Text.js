import React from 'react';
import Emoji from './Emoji';

class Text extends Emoji {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I am JS Language', '😇');
        return (
            <div>
                <h3>Text.js - inheritance</h3>
                {super.render(decoratedText)}
            </div>
        );
    }
}

export default Text;