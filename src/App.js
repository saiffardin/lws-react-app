import ClockList from "./component/ClockList";


function App() {

    let quantities = [1,2,3];

    return (
        <div>
            <h1>React App</h1>
            <ClockList quantities={quantities}></ClockList>
        </div>
    );
}

export default App;
