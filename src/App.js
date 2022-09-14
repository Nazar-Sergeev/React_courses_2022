import Characters from "./components/characters/Characters";
import './App.css'
import Simpsons from "./components/simpsons/Simpsons";

function App() {

    return (
        <div className='wrap'>
            <div>
                <h2>Rick and Morty</h2>
                <Characters/>
            </div>
            <div className='wrap-simpsons'>
                <h2>Simpsons family</h2>
                <Simpsons/>
            </div>
        </div>
    );
}

export default App;
