import React, {Component} from 'react';

class Emoji extends Component {

    addEmoji = (txt, emoji) => `${emoji} ${txt} ${emoji}`;

    render(override) {
        let text = 'I am the Emoji Component';

        if (override) text = override;

        return (
            <div>
                {text}
            </div>
        );
    }
}

export default Emoji;