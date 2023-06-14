import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './Components/Routes';

function App() {
    return (
        <div>
            <Router>
                <Routes />
            </Router>
        </div>
    );
}

export default App;
