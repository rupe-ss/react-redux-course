import './App.css';
import { useSelector } from 'react-redux';

function App() {
    const counter = useSelector((state) => state.counter);
    const isLogged = useSelector((state) => state.isLogged);

    return (
        <div className='App'>
            <div style={{ color: 'red', fontWeight: 'bold', fontSize: 40 }}>
                {counter}
            </div>
            <button style={{ padding: '10px' }}>+</button>
            <button style={{ padding: '10px' }}>-</button>
            {isLogged ? <div> Logged In </div> : ''}
        </div>
    );
}

export default App;
