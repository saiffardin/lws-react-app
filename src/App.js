import Bracket from "./component/composition/Bracket";
import Emoji from "./component/composition/Emoji";
import Text from "./component/composition/Text";

function App() {

    return (
        <div>
            <h1>Composition</h1>
            <Emoji>
                {(obj)=> <Text func = {obj.addEmoji}></Text>}
            </Emoji>

            <Bracket>
                {(obj)=> <Text func = {obj.addBracket}></Text>}
            </Bracket>

        </div>
    );
}

export default App;
