import {Component} from 'react';

class Emoji extends Component {

    addEmoji = (txt, emoji) => `${emoji} ${txt} ${emoji}`;

    render() {
        return (
            <div>
                {this.props.children({addEmoji:this.addEmoji})}
            </div>
        );
    }
}

export default Emoji;