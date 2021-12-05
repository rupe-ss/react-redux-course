import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedIn } from './actions/index';

function App() {
    const counter = useSelector((state) => state.counter);
    const isLogged = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <div style={{ color: 'red', fontWeight: 'bold', fontSize: 40 }}>
                {counter}
            </div>
            <button
                onClick={() => dispatch(increment())}
                style={{ padding: '10px' }}>
                +
            </button>
            <button
                style={{ padding: '10px' }}
                onClick={() => dispatch(decrement())}>
                -
            </button>

            <div>
                <button
                    style={{ padding: '10px' }}
                    onClick={() => dispatch(loggedIn())}>
                    LoginIn
                </button>
            </div>
            {isLogged ? <div> Logged In </div> : ''}
        </div>
    );
}

export default App;
