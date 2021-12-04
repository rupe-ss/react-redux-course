import './App.css';
import SimpleReduxStore from './redux/SimpleReduxStore';

function App() {
    return (
        <div
            className='App'
            style={{ color: 'red', fontWeight: 'bold', fontSize: 40 }}>
            Header
            <SimpleReduxStore />
        </div>
    );
}

export default App;
