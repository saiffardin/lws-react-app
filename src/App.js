import ClickComponent from "./component/ClickComponent";
import Counter from "./component/Counter";
import HoverComponent from "./component/HoverComponent";

function App() {

    return (
        <div>
            <h1>render prop</h1>

            <Counter
                render={(count, handleIncrement) => {
                    return (
                        <ClickComponent
                            count={count}
                            handleIncrement={handleIncrement}
                        />
                    )
                }
                }
            />

            <Counter
                render={(count, handleIncrement) => {
                    return (
                        <HoverComponent
                            count={count}
                            handleIncrement={handleIncrement}
                        />
                    )
                }
                }
            />
        </div>
    );
}

export default App;
