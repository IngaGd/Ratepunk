import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
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
